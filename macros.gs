function viewType(){
//Dropdown cell is set to B2
  var evType = SpreadsheetApp.getActive().getRange("B2").getValues().toString();
  var spreadsheet = SpreadsheetApp.getActive();
  //Test1
  if (evType == 'Test1'){
  spreadsheet.getActiveSheet().hideColumns(5, 122);
  spreadsheet.getRange('test1').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('test1CO').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('F:F').activate();    
  }
    //Test2
  if (evType == 'Test2'){
  spreadsheet.getActiveSheet().hideColumns(5, 122);
  spreadsheet.getRange('test2').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('test2CO').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('J:J').activate();
  }

  if (evType == 'Assig1'){
  spreadsheet.getActiveSheet().hideColumns(5, 122);
  spreadsheet.getRange('Assig1').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('Assig1CO').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('Assig1').activate();
  }
  
  if (evType == 'Assig2'){
  spreadsheet.getActiveSheet().hideColumns(5, 122);
  spreadsheet.getRange('Assig2').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('Assig2CO').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('Assig2').activate();
  }

  if (evType == 'Coursework'){
  spreadsheet.getActiveSheet().hideColumns(5, 122);
  spreadsheet.getRange('CW').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('CWCO').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('Fullmark').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('D:D').activate();
  }

  if (evType == 'Final'){
  spreadsheet.getActiveSheet().hideColumns(5, 122);
  spreadsheet.getRange('Final').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('FinalCO').activate();
  spreadsheet.getActiveSheet().showColumns(spreadsheet.getActiveRange().getColumn(), spreadsheet.getActiveRange().getNumColumns());
  spreadsheet.getRange('Final').activate();
  }
  
  if (evType == 'Overall'){
  spreadsheet.getActiveSheet().showColumns(1, 122);
  }

};

