var App = {
	lastProcessedData: null,
	addResult: function (msg) {
		const $elem = $('<p>' + msg + '<p>');
		$('.result').append($elem);
		return $elem;
	},
	isoDateToMonths: function (dt) {
		if (typeof dt == 'undefined') {
			debugger;
		}
		let dtParts = dt.split('-').slice(0, 2);
		const yearMonths = parseInt(dtParts[0], 10) * 12;
		const monthMonths = parseInt(dtParts[1], 10);
		return yearMonths + monthMonths;
	},
	isoDateMonthsDiff: function (d1, d2) {
		// '2020-01-31' - '2020-03-01' = 2. Ignores days
		let d1Months = App.isoDateToMonths(d1);
		let d2Months = App.isoDateToMonths(d2);
		return Math.abs(d1Months - d2Months);
	},
	getIncrementedMonthIsoDate: function (isoDate) {
		let [years, months, days] = isoDate.split('-').slice(0, 3);
		if (++months > 12) {
			years++;
			months = 1;
		}
		return years + '-' + months.toString().padStart(2, '0') + '-' + days;
	},
	convertToCsv: function (data, outputColOrder) {
		var rows = [outputColOrder.join(';')];
		data.forEach((record) => {
			var rowData = [];
			outputColOrder.forEach((colName) => {
				rowData.push(record[colName]);
			});
			rows.push(rowData.join(';'));
		});
		return rows.join('\n');
	},
	convertToHTML: function (data, cols, maxCols, maxRows) {
		maxCols = maxCols || Number.MAX_SAFE_INTEGER;
		maxRows = maxRows || Number.MAX_SAFE_INTEGER;
		var html = '<table class="table table-striped table-bordered"><thead>';
		cols.forEach((colName, i) => {
			if (i >= maxCols) return;
			html += '<th>' + colName + '</th>';
		});
		html += '</thead><tbody>';
		data.forEach((record, i) => {
			if (i >= maxRows) return;
			html += '</tr>';
			cols.forEach((colName, z) => {
				if (z >= maxCols) return;
				html += '<td>' + record[colName] + '</td>';
			});
			html += '</tr>';
		});
		html += '</tbody></table>';
		return html;
	},
	getYearMonthFromIso: function (isoDate) {
		return isoDate.split('-').slice(0, 2).join('-');
	},
	setLinkDownload: function ($link, filename, contents) {
		$link.attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contents)).attr('download', filename);
	},
	parseCSV (text, outputColumnsAllowed) {
		const lines = text.split('\n');
		lines.splice(0, 14); // Removing non-data lines 1 to 14...
		if (lines.length < 2) {
			throw new Error('Please load a CSV with at least 2 lines.');
		}
		const cols = lines.splice(0, 1)[0].split(';');
		cols.pop(); //  remove last empty col after ";"
		cols.push('Duplicated', 'GapFilled');

		// App.addResult('Reading CSV entries into an array [{col1: 1, col2: 2}, {col1: 3, col2: 4}]...');
		const data = [];
		const ignoredCols = {};
		lines.forEach((line, lineNumber) => {
			if (!line) return;
			const lineObj = {};
			line.split(';').forEach((cell, colNumber) => {
				if (colNumber > cols.length - 1) return; // skip last empty col after ";"
				const colName = cols[colNumber];
				if (outputColumnsAllowed.includes(colName)) {
					if (colName == 'Data') {
						cell = cell.split('/').reverse().join('-');
					}
					lineObj[colName] = cell;
				} else {
					ignoredCols[colName] = 1;
				}
			});
			lineObj['Duplicated'] = '';
			lineObj['GapFilled'] = '';
			data.push(lineObj);
		});
		return [data, ignoredCols];
	},
	fillMissingMonths: function (data) {
		let emptyEntry = jQuery.extend({}, data[0]);
		Object.entries(emptyEntry).forEach(([key, value]) => {
			emptyEntry[key] = '';
		});
		const newData = [data[0]];
		let lastEntryDate = data[0].Data;
		let filledGaps = [];
		data.forEach((entry, index) => {
			if (index == 0) return;
			const monthsMissing = Math.max(0, App.isoDateMonthsDiff(lastEntryDate, entry.Data) - 1);
			let incrementedIsoDate = lastEntryDate;
			for (let i = 0; i < monthsMissing; i++) {
				incrementedIsoDate = App.getYearMonthFromIso(App.getIncrementedMonthIsoDate(incrementedIsoDate)) + '-01';
				var newEntry = $.extend({}, emptyEntry, {
					Data: incrementedIsoDate,
					GapFilled: 1,
					Duplicated: '',
					EstacaoCodigo: entry.EstacaoCodigo
				});
				newData.push(newEntry);
				filledGaps.push(incrementedIsoDate);
			}
			newData.push(entry);
			lastEntryDate = entry.Data;
		});
		return [newData, filledGaps];
	},
	markDuplicateMonths: function (newData) {
		let prevEntryDate = '';
		const duplicateEntries = [];
		let i = 0;
		newData.forEach((entry, index) => {
			if (entry.Data && prevEntryDate) {
				const prevEntryMonths = App.getYearMonthFromIso(prevEntryDate);
				const entryMonths = App.getYearMonthFromIso(entry.Data);
				if (entryMonths == prevEntryMonths) {
					entry.Duplicated = 1;
					duplicateEntries.push(App.getYearMonthFromIso(entry.Data));
				}
			}
			entry.id = ++i;
			prevEntryDate = entry.Data;
		});
		return duplicateEntries;
	},
	generatePreviewTable: function (maxCols, maxRows) {
		if (!App.lastProcessedData) return;
		$('.preview').html(App.convertToHTML(App.lastProcessedData, outputColumns, maxCols, maxRows));
	},
	computeNewValues: function (data, cols) {
		let firstCol = cols.indexOf('Profundidade');
		data.forEach((entry, index) => {
			if (entry.GapFilled) {
				cols.forEach((col) => {
					if (typeof entry[col] == 'undefined') entry[col] = '';;
				});
				return;
			}
			// Profundidade, ParametroProfundidadeQualAgua001Status, newParametroProfundidadeQualAgua001Status, ProfundidadeStart, ProfundidadeEnd	
			// TempAr, QualAgua002Status, newQualAgua002Status, TempArStart, TempArEnd
			for (let x = firstCol; x < cols.length; x += 5) {
				let entryCol = cols[x];
				let statusCol = cols[x + 1];
				let newStatusCol = cols[x + 2];
				let startCol = cols[x + 3];
				let endCol = cols[x + 4];

				let status = entry[statusCol];
				let expectedStatus = ['', '0', '1', '2', '3', '4', '5'];
				if (!expectedStatus.includes(status)) {
					throw new Error('status col of entry ' + index + ' was of the expected values (' + expectedStatus.join(',') + '): ' + status);
				}
				if (status == '') entry[newStatusCol] = '';
				if (status == '0') entry[newStatusCol] = ''; // onde era 0, converter para branco
				if (status == '1') entry[newStatusCol] = '0'; // onde era 1 vira 0 na coluna Ind
				if (status == '2') entry[newStatusCol] = '1'; // onde era 2 vira 1 na coluna Ind. 2 = dado censurado
				if (status == '3') entry[newStatusCol] = '2'; // ????????????
				if (status == '4') entry[newStatusCol] = '3'; // ????????????
				if (status == '5') entry[newStatusCol] = '4'; // ????????????

				let newStatus = entry[newStatusCol];
				if (newStatus == '' || newStatus == '0') { // quando vira 0, ele repete em ambas as colunas
					entry[startCol] = entry[entryCol] || '';
					entry[endCol] = entry[entryCol] || '';
				}
				if (newStatus == '1' || newStatus == '2' || newStatus == '3' || newStatus == '4') { // quando vira 1, ele coloca 0 na primeira, depois repete na outra
					entry[startCol] = 0;
					entry[endCol] = entry[entryCol] || '';
				}
			}
		});
	},
	processCSVButtonClick: function () {
		try {
			$('.result').html('');
			$('.preview').html('');
			App.addResult('Loading CSV...');
			let [data, ignoredCols] = App.parseCSV($('.textarea_csv').val(), outputColumns);

			App.addResult('Sorting entries in chronological order...');
			data.sort((x, y) => {
				if (x.Data < y.Data) return -1;
				if (x.Data > y.Data) return 1;
				return 0;
			});

			App.addResult('Insert missing months...');
			let [newData, filledGaps] = App.fillMissingMonths(data);

			App.addResult('Marking duplicated months...');
			duplicateEntries = App.markDuplicateMonths(newData);

			App.addResult('Computing new values');
			App.computeNewValues(newData, outputColumns);

			// App.addResult('Removing columns D, E, F, G...'); // Hora	NumMedicao	PosHorizColeta	PosVertColeta

			App.addResult('Reordering columns for output...');
			// Remove cols D, E, F and G when reorganizign cols. When only pick what we want in the output
			App.addResult('<h3 style="color: #0A0">Success!</h3>');
			App.addResult('<b>Input has ' + data.length + ' entries</b>');
			App.addResult('<b>Filled month gaps (' + filledGaps.length + '):</b> ' + filledGaps.map((gap) => App.getYearMonthFromIso(gap)).join(', '));
			App.addResult('<b>Marked month duplicates (' + duplicateEntries.length + '):</b> ' + duplicateEntries.join(', '));
			App.addResult('<b>Output has ' + newData.length + ' entries</b>');
			let dataCSV = App.convertToCsv(newData, outputColumns);
			let ignoredColNames = Object.keys(ignoredCols);
			App.addResult('<b>Input has ' + ignoredColNames.length + ' columns that were not included in output</b>: ' + ignoredColNames.join(', '));
			App.addResult('<b>Download processed CSV:</b>');
			let $p = App.addResult('<a href="link" style="font-size: 30px">click here to download</a>');
			var today = new Date();
			var date = today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + today.getDate();
			App.setLinkDownload($p.find('a'), 'processed_csv_' + date + '.csv', dataCSV);
			App.lastProcessedData = newData;
			$('.btn_preview, .btn_preview_quick').removeClass('disabled');
		} catch (e) {
			App.addResult('<h3 style="color: red">Ops. There was an error</h3>');
			App.addResult('').text(e.toString());
			App.addResult('Please submit an issue here with the CSV file attatched so I can investigate: <a href="https://github.com/ww9/hydroweb">https://github.com/ww9/hydroweb</a>');
			throw e;
		}
	},
};