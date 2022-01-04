// prettier-ignore
let outputColumns = [
	'id', 'GapFilled', 'Duplicated', 'EstacaoCodigo', 'Data',
	'Profundidade', 'ParametroProfundidadeQualAgua001Status', 'newParametroProfundidadeQualAgua001Status', 'ProfundidadeStart', 'ProfundidadeEnd',
	'TempAr', 'QualAgua002Status', 'newQualAgua002Status', 'TempArStart', 'TempArEnd',
	'TempAmostra', 'QualAgua003Status', 'newQualAgua003Status', 'TempAmostraStart', 'TempAmostraEnd',
	'pH', 'QualAgua004Status', 'newQualAgua004Status', 'pHStart', 'pHEnd',
	'Cor', 'QualAgua005Status', 'newQualAgua005Status', 'CorStart', 'CorEnd',
	'Turbidez', 'QualAgua006Status', 'newQualAgua006Status', 'TurbidezStart', 'TurbidezEnd',
	'CondutividadeEletrica', 'QualAgua007Status', 'newQualAgua007Status', 'CondutividadeEletricaStart', 'CondutividadeEletricaEnd',
	'DurezaTotal', 'QualAgua008Status', 'newQualAgua008Status', 'DurezaTotalStart', 'DurezaTotalEnd',
	'Dureza', 'QualAgua009Status', 'newQualAgua009Status', 'DurezaStart', 'DurezaEnd',
	'DQO', 'QualAgua010Status', 'newQualAgua010Status', 'DQOStart', 'DQOEnd',
	'DBO', 'QualAgua011Status', 'newQualAgua011Status', 'DBOStart', 'DBOEnd',
	'OD', 'QualAgua012Status', 'newQualAgua012Status', 'ODStart', 'ODEnd',
	'SolTotais', 'QualAgua013Status', 'newQualAgua013Status', 'SolTotaisStart', 'SolTotaisEnd',
	'SolFixos', 'QualAgua014Status', 'newQualAgua014Status', 'SolFixosStart', 'SolFixosEnd',
	'SolVolateis', 'QualAgua015Status', 'newQualAgua015Status', 'SolVolateisStart', 'SolVolateisEnd',
	'SolSuspensaoTotais', 'QualAgua016Status', 'newQualAgua016Status', 'SolSuspensaoTotaisStart', 'SolSuspensaoTotaisEnd',
	'SolSuspensaoFixos', 'QualAgua017Status', 'newQualAgua017Status', 'SolSuspensaoFixosStart', 'SolSuspensaoFixosEnd',
	'SolSuspensaoVolateis', 'QualAgua018Status', 'newQualAgua018Status', 'SolSuspensaoVolateisStart', 'SolSuspensaoVolateisEnd',
	'SolDissolvidosTotais', 'QualAgua019Status', 'newQualAgua019Status', 'SolDissolvidosTotaisStart', 'SolDissolvidosTotaisEnd',
	'SolDissolvidosFixos', 'QualAgua020Status', 'newQualAgua020Status', 'SolDissolvidosFixosStart', 'SolDissolvidosFixosEnd',
	'SolDissolvidosVolateis', 'QualAgua021Status', 'newQualAgua021Status', 'SolDissolvidosVolateisStart', 'SolDissolvidosVolateisEnd',
	'SolSedimentaveis', 'QualAgua022Status', 'newQualAgua022Status', 'SolSedimentaveisStart', 'SolSedimentaveisEnd',
	'Detergentes', 'QualAgua023Status', 'newQualAgua023Status', 'DetergentesStart', 'DetergentesEnd',
	'AlcalinidadeCO3', 'QualAgua024Status', 'newQualAgua024Status', 'AlcalinidadeCO3Start', 'AlcalinidadeCO3End',
	'AlcalinidadeHCO3', 'QualAgua025Status', 'newQualAgua025Status', 'AlcalinidadeHCO3Start', 'AlcalinidadeHCO3End',
	'AlcalinidadeOH', 'QualAgua026Status', 'newQualAgua026Status', 'AlcalinidadeOHStart', 'AlcalinidadeOHEnd',
	'Cloretos', 'QualAgua027Status', 'newQualAgua027Status', 'CloretosStart', 'CloretosEnd',
	'Sulfatos', 'QualAgua028Status', 'newQualAgua028Status', 'SulfatosStart', 'SulfatosEnd',
	'Sulfetos', 'QualAgua029Status', 'newQualAgua029Status', 'SulfetosStart', 'SulfetosEnd',
	'Fluoretos', 'QualAgua030Status', 'newQualAgua030Status', 'FluoretosStart', 'FluoretosEnd',
	'FosfatoTotal', 'QualAgua031Status', 'newQualAgua031Status', 'FosfatoTotalStart', 'FosfatoTotalEnd',
	'Cianetos', 'QualAgua032Status', 'newQualAgua032Status', 'CianetosStart', 'CianetosEnd',
	'NitrogenioTotal', 'QualAgua033Status', 'newQualAgua033Status', 'NitrogenioTotalStart', 'NitrogenioTotalEnd',
	'AmoniaNaoIonizavel', 'QualAgua034Status', 'newQualAgua034Status', 'AmoniaNaoIonizavelStart', 'AmoniaNaoIonizavelEnd',
	'NitrogenioAmoniacal', 'QualAgua035Status', 'newQualAgua035Status', 'NitrogenioAmoniacalStart', 'NitrogenioAmoniacalEnd',
	'Nitratos', 'QualAgua036Status', 'newQualAgua036Status', 'NitratosStart', 'NitratosEnd',
	'Nitritos', 'QualAgua037Status', 'newQualAgua037Status', 'NitritosStart', 'NitritosEnd',
	'CompostosOrganoclorados', 'QualAgua038Status', 'newQualAgua038Status', 'CompostosOrganocloradosStart', 'CompostosOrganocloradosEnd',
	'CompostosOrganofosforados', 'QualAgua039Status', 'newQualAgua039Status', 'CompostosOrganofosforadosStart', 'CompostosOrganofosforadosEnd',
	'Aluminio', 'QualAgua040Status', 'newQualAgua040Status', 'AluminioStart', 'AluminioEnd',
	'Arsenio', 'QualAgua041Status', 'newQualAgua041Status', 'ArsenioStart', 'ArsenioEnd',
	'Cadmio', 'QualAgua042Status', 'newQualAgua042Status', 'CadmioStart', 'CadmioEnd',
	'Chumbo', 'QualAgua043Status', 'newQualAgua043Status', 'ChumboStart', 'ChumboEnd',
	'Cobre', 'QualAgua044Status', 'newQualAgua044Status', 'CobreStart', 'CobreEnd',
	'CromoTrivalente', 'QualAgua045Status', 'newQualAgua045Status', 'CromoTrivalenteStart', 'CromoTrivalenteEnd',
	'CromoHexavalente', 'QualAgua046Status', 'newQualAgua046Status', 'CromoHexavalenteStart', 'CromoHexavalenteEnd',
	'Manganes', 'QualAgua047Status', 'newQualAgua047Status', 'ManganesStart', 'ManganesEnd',
	'Mercurio', 'QualAgua048Status', 'newQualAgua048Status', 'MercurioStart', 'MercurioEnd',
	'Niquel', 'QualAgua049Status', 'newQualAgua049Status', 'NiquelStart', 'NiquelEnd',
	'Zinco', 'QualAgua050Status', 'newQualAgua050Status', 'ZincoStart', 'ZincoEnd',
	'IndiceFenois', 'QualAgua051Status', 'newQualAgua051Status', 'IndiceFenoisStart', 'IndiceFenoisEnd',
	'CloroResidual', 'QualAgua052Status', 'newQualAgua052Status', 'CloroResidualStart', 'CloroResidualEnd',
	'ColiformesTotais', 'QualAgua053Status', 'newQualAgua053Status', 'ColiformesTotaisStart', 'ColiformesTotaisEnd',
	'ColiformesFecais', 'QualAgua054Status', 'newQualAgua054Status', 'ColiformesFecaisStart', 'ColiformesFecaisEnd',
	'Bario', 'QualAgua055Status', 'newQualAgua055Status', 'BarioStart', 'BarioEnd',
	'Berilio', 'QualAgua056Status', 'newQualAgua056Status', 'BerilioStart', 'BerilioEnd',
	'Boro', 'QualAgua057Status', 'newQualAgua057Status', 'BoroStart', 'BoroEnd',
	'Cobalto', 'QualAgua058Status', 'newQualAgua058Status', 'CobaltoStart', 'CobaltoEnd',
	'Estanho', 'QualAgua059Status', 'newQualAgua059Status', 'EstanhoStart', 'EstanhoEnd',
	'Prata', 'QualAgua060Status', 'newQualAgua060Status', 'PrataStart', 'PrataEnd',
	'Litio', 'QualAgua061Status', 'newQualAgua061Status', 'LitioStart', 'LitioEnd',
	'Selenio', 'QualAgua062Status', 'newQualAgua062Status', 'SelenioStart', 'SelenioEnd',
	'UranioTotal', 'QualAgua063Status', 'newQualAgua063Status', 'UranioTotalStart', 'UranioTotalEnd',
	'Vanadio', 'QualAgua064Status', 'newQualAgua064Status', 'VanadioStart', 'VanadioEnd',
	'Benzeno', 'QualAgua065Status', 'newQualAgua065Status', 'BenzenoStart', 'BenzenoEnd',
	'BenzoAPireno', 'QualAgua066Status', 'newQualAgua066Status', 'BenzoAPirenoStart', 'BenzoAPirenoEnd',
	'n11Dicloroeteno', 'QualAgua067Status', 'newQualAgua067Status', 'n11DicloroetenoStart', 'n11DicloroetenoEnd',
	'n12Dicloroetano', 'QualAgua068Status', 'newQualAgua068Status', 'n12DicloroetanoStart', 'n12DicloroetanoEnd',
	'Pentaclorofenol', 'QualAgua069Status', 'newQualAgua069Status', 'PentaclorofenolStart', 'PentaclorofenolEnd',
	'Tetracloroeteno', 'QualAgua070Status', 'newQualAgua070Status', 'TetracloroetenoStart', 'TetracloroetenoEnd',
	'Tricloroeteno', 'QualAgua071Status', 'newQualAgua071Status', 'TricloroetenoStart', 'TricloroetenoEnd',
	'TetracloretoCarbono', 'QualAgua072Status', 'newQualAgua072Status', 'TetracloretoCarbonoStart', 'TetracloretoCarbonoEnd',
	'n246Triclorofenol', 'QualAgua073Status', 'newQualAgua073Status', 'n246TriclorofenolStart', 'n246TriclorofenolEnd',
	'Aldrin', 'QualAgua074Status', 'newQualAgua074Status', 'AldrinStart', 'AldrinEnd',
	'Clordano', 'QualAgua075Status', 'newQualAgua075Status', 'ClordanoStart', 'ClordanoEnd',
	'DDT', 'QualAgua076Status', 'newQualAgua076Status', 'DDTStart', 'DDTEnd',
	'Dieldrin', 'QualAgua077Status', 'newQualAgua077Status', 'DieldrinStart', 'DieldrinEnd',
	'Endrin', 'QualAgua078Status', 'newQualAgua078Status', 'EndrinStart', 'EndrinEnd',
	'Endossulfan', 'QualAgua079Status', 'newQualAgua079Status', 'EndossulfanStart', 'EndossulfanEnd',
	'EpoxidoHeptacloro', 'QualAgua080Status', 'newQualAgua080Status', 'EpoxidoHeptacloroStart', 'EpoxidoHeptacloroEnd',
	'Heptacloro', 'QualAgua081Status', 'newQualAgua081Status', 'HeptacloroStart', 'HeptacloroEnd',
	'Lindano', 'QualAgua082Status', 'newQualAgua082Status', 'LindanoStart', 'LindanoEnd',
	'Metoxicloro', 'QualAgua083Status', 'newQualAgua083Status', 'MetoxicloroStart', 'MetoxicloroEnd',
	'DodecacloroNonacloro', 'QualAgua084Status', 'newQualAgua084Status', 'DodecacloroNonacloroStart', 'DodecacloroNonacloroEnd',
	'BifenilasPolicloradas', 'QualAgua085Status', 'newQualAgua085Status', 'BifenilasPolicloradasStart', 'BifenilasPolicloradasEnd',
	'Toxafeno', 'QualAgua086Status', 'newQualAgua086Status', 'ToxafenoStart', 'ToxafenoEnd',
	'Demeton', 'QualAgua087Status', 'newQualAgua087Status', 'DemetonStart', 'DemetonEnd',
	'Gution', 'QualAgua088Status', 'newQualAgua088Status', 'GutionStart', 'GutionEnd',
	'Malation', 'QualAgua089Status', 'newQualAgua089Status', 'MalationStart', 'MalationEnd',
	'Paration', 'QualAgua090Status', 'newQualAgua090Status', 'ParationStart', 'ParationEnd',
	'Carbaril', 'QualAgua091Status', 'newQualAgua091Status', 'CarbarilStart', 'CarbarilEnd',
	'Acido24Diclorofenoxiacetico', 'QualAgua092Status', 'newQualAgua092Status', 'Acido24DiclorofenoxiaceticoStart', 'Acido24DiclorofenoxiaceticoEnd',
	'n245TP', 'QualAgua093Status', 'newQualAgua093Status', 'n245TPStart', 'n245TPEnd',
	'n245T', 'QualAgua094Status', 'newQualAgua094Status', 'n245TStart', 'n245TEnd',
	'BHC', 'QualAgua095Status', 'newQualAgua095Status', 'BHCStart', 'BHCEnd',
	'Ethion', 'QualAgua096Status', 'newQualAgua096Status', 'EthionStart', 'EthionEnd',
	'DySystonDisulfton', 'QualAgua097Status', 'newQualAgua097Status', 'DySystonDisulftonStart', 'DySystonDisulftonEnd',
	'Phosdrin', 'QualAgua098Status', 'newQualAgua098Status', 'PhosdrinStart', 'PhosdrinEnd',
	'DDEPP', 'QualAgua099Status', 'newQualAgua099Status', 'DDEPPStart', 'DDEPPEnd',
	'AzinfosEtil', 'QualAgua100Status', 'newQualAgua100Status', 'AzinfosEtilStart', 'AzinfosEtilEnd',
	'Diazinon', 'QualAgua101Status', 'newQualAgua101Status', 'DiazinonStart', 'DiazinonEnd',
	'EstreptococosFecais', 'QualAgua102Status', 'newQualAgua102Status', 'EstreptococosFecaisStart', 'EstreptococosFecaisEnd',
	'Salmonelas', 'QualAgua103Status', 'newQualAgua103Status', 'SalmonelasStart', 'SalmonelasEnd',
	'Colifagos', 'QualAgua104Status', 'newQualAgua104Status', 'ColifagosStart', 'ColifagosEnd',
	'BacteriasHeterotroficas', 'QualAgua105Status', 'newQualAgua105Status', 'BacteriasHeterotroficasStart', 'BacteriasHeterotroficasEnd',
	'Protozoarios', 'QualAgua106Status', 'newQualAgua106Status', 'ProtozoariosStart', 'ProtozoariosEnd',
	'Fungos', 'QualAgua107Status', 'newQualAgua107Status', 'FungosStart', 'FungosEnd',
	'Algas', 'QualAgua108Status', 'newQualAgua108Status', 'AlgasStart', 'AlgasEnd',
	'ContagemBacteriasPlaca', 'QualAgua109Status', 'newQualAgua109Status', 'ContagemBacteriasPlacaStart', 'ContagemBacteriasPlacaEnd',
	'Clorofila', 'QualAgua110Status', 'newQualAgua110Status', 'ClorofilaStart', 'ClorofilaEnd',
	'OleosGraxas', 'QualAgua111Status', 'newQualAgua111Status', 'OleosGraxasStart', 'OleosGraxasEnd',
	'Hidrocarbonetos', 'QualAgua112Status', 'newQualAgua112Status', 'HidrocarbonetosStart', 'HidrocarbonetosEnd',
	'CarbonoOrganicoTotal', 'QualAgua113Status', 'newQualAgua113Status', 'CarbonoOrganicoTotalStart', 'CarbonoOrganicoTotalEnd',
	'AlcalinidadeTotal', 'QualAgua114Status', 'newQualAgua114Status', 'AlcalinidadeTotalStart', 'AlcalinidadeTotalEnd',
	'MetilParation', 'QualAgua115Status', 'newQualAgua115Status', 'MetilParationStart', 'MetilParationEnd',
	'CromoTotal', 'QualAgua116Status', 'newQualAgua116Status', 'CromoTotalStart', 'CromoTotalEnd',
	'OrtofosfatoTotal', 'QualAgua117Status', 'newQualAgua117Status', 'OrtofosfatoTotalStart', 'OrtofosfatoTotalEnd',
	'NitrogenioOrganico', 'QualAgua118Status', 'newQualAgua118Status', 'NitrogenioOrganicoStart', 'NitrogenioOrganicoEnd',
	'SodioTotal', 'QualAgua119Status', 'newQualAgua119Status', 'SodioTotalStart', 'SodioTotalEnd',
	'SilicaDissolvida', 'QualAgua120Status', 'newQualAgua120Status', 'SilicaDissolvidaStart', 'SilicaDissolvidaEnd',
	'MagnesioTotal', 'QualAgua121Status', 'newQualAgua121Status', 'MagnesioTotalStart', 'MagnesioTotalEnd',
	'PotassioTotal', 'QualAgua122Status', 'newQualAgua122Status', 'PotassioTotalStart', 'PotassioTotalEnd',
	'CalcioTotal', 'QualAgua123Status', 'newQualAgua123Status', 'CalcioTotalStart', 'CalcioTotalEnd',
	'FerroTotal', 'QualAgua124Status', 'newQualAgua124Status', 'FerroTotalStart', 'FerroTotalEnd',
	'DescargaLiquida', 'QualAgua125Status', 'newQualAgua125Status', 'DescargaLiquidaStart', 'DescargaLiquidaEnd',
	'ZooplanctonTotal', 'QualAgua126Status', 'newQualAgua126Status', 'ZooplanctonTotalStart', 'ZooplanctonTotalEnd',
	'BismutoTotal', 'QualAgua127Status', 'newQualAgua127Status', 'BismutoTotalStart', 'BismutoTotalEnd',
	'Acidez', 'QualAgua128Status', 'newQualAgua128Status', 'AcidezStart', 'AcidezEnd',
	'FosforoTotal', 'QualAgua129Status', 'newQualAgua129Status', 'FosforoTotalStart', 'FosforoTotalEnd',
	'NitrogenioAlbuminoide', 'QualAgua130Status', 'newQualAgua130Status', 'NitrogenioAlbuminoideStart', 'NitrogenioAlbuminoideEnd',
	'EnteroBacteriasPatogenicas', 'QualAgua131Status', 'newQualAgua131Status', 'EnteroBacteriasPatogenicasStart', 'EnteroBacteriasPatogenicasEnd',
	'IQA', 'QualAgua132Status', 'newQualAgua132Status', 'IQAStart', 'IQAEnd',
	'NitrogenioTotalKJELDAHL', 'QualAgua133Status', 'newQualAgua133Status', 'NitrogenioTotalKJELDAHLStart', 'NitrogenioTotalKJELDAHLEnd',
	'Amoniaco', 'QualAgua134Status', 'newQualAgua134Status', 'AmoniacoStart', 'AmoniacoEnd',
	'Transparencia', 'QualAgua135Status', 'newQualAgua135Status', 'TransparenciaStart', 'TransparenciaEnd',
	'ColiformesTermotolerantes', 'QualAgua136Status', 'newQualAgua136Status', 'ColiformesTermotolerantesStart', 'ColiformesTermotolerantesEnd',
	'Escherichia', 'QualAgua137Status', 'newQualAgua137Status', 'EscherichiaStart', 'EscherichiaEnd',
	'Aluminiodissolvido', 'QualAgua138Status', 'newQualAgua138Status', 'AluminiodissolvidoStart', 'AluminiodissolvidoEnd',
	'Borodissolvido', 'QualAgua139Status', 'newQualAgua139Status', 'BorodissolvidoStart', 'BorodissolvidoEnd',
	'Cianetolivre', 'QualAgua140Status', 'newQualAgua140Status', 'CianetolivreStart', 'CianetolivreEnd',
	'Cobredissolvido', 'QualAgua141Status', 'newQualAgua141Status', 'CobredissolvidoStart', 'CobredissolvidoEnd',
	'CondutividadeEspecifica', 'QualAgua142Status', 'newQualAgua142Status', 'CondutividadeEspecificaStart', 'CondutividadeEspecificaEnd',
	'Densidadecianobacterias', 'QualAgua143Status', 'newQualAgua143Status', 'DensidadecianobacteriasStart', 'DensidadecianobacteriasEnd',
	'Durezamagnesio', 'QualAgua144Status', 'newQualAgua144Status', 'DurezamagnesioStart', 'DurezamagnesioEnd',
	'FerroDissolvido', 'QualAgua145Status', 'newQualAgua145Status', 'FerroDissolvidoStart', 'FerroDissolvidoEnd',
	'FitoplanctonQuantitativo', 'QualAgua146Status', 'newQualAgua146Status', 'FitoplanctonQuantitativoStart', 'FitoplanctonQuantitativoEnd',
	'ODsaturacao', 'QualAgua147Status', 'newQualAgua147Status', 'ODsaturacaoStart', 'ODsaturacaoEnd'];