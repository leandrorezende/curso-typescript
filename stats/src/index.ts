import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";

// refactory 01
// const reader = new MatchReader('football.csv');
// reader.read();

// refactory 02
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);