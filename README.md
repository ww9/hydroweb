# HidroWeb data processing tool

This is an online tool that reads, cleans and reorganizes hydrometeorological data from https://www.snirh.gov.br/hidroweb

## How it works

-  Open https://ww9.github.io/hydroweb

-  Download zip files from https://www.snirh.gov.br/hidroweb/serieshistoricas and upload them over to the tool in order to process them. Try inserting "Código da Estação" as 66295200

-  The tool uses https://gildas-lormeau.github.io/zip.js/ library to extract the zip files in your browser.

-  Then we use X library to read the MDB files contained inside the zip files.

-  Once we have read all the data, we perform cleanup and reorganization of the data.

-  Finally the tool generates CSV files with the processed data.

## Architecture

The technology used in thir project is intentionally kept as simple as possible in order to foster contributions.

Everything happens in the browser, there is no backend required. That means it can run without a webserver and even offline on your computer.

That is also the reason why it works as a GitHub page on https://ww9.github.io/hydroweb.

## Support

If you need assistance please e-mail me on brunocassol@gmail.com

Should you require other data processing tools, I'm always eager to listen and perhaps I may be of help.

## Todo & Ideas

-  Explore possibility of importing ZIP file from browser without requiring ZIP upload

   -  Sample URL https://www.snirh.gov.br/hidroweb/rest/api/documento/convencionais?tipo=3&documentos=66259200
   -  CORS might apply so we might need a backend tunnel somewhere
   -  Perhaps deploy a heroku service to receive an ID, download ZIPs and return CSV contents

-  Encoding seems to be ISO8859-1. We might need https://www.npmjs.com/package/iconv-lite
   -  https://www.ti-enxame.com/pt/javascript/converter-iso-8859-1-em-utf-8-javascript/1050349267/
   -  Or maybe we can get away with not decoding since it's similar
