const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('My Sheet');

//로직 흐름 :
//엑셀 워크북 생성 -> 엑셀 시트 생성 -> 대표행(타이틀행) 설정 및 입력 -> 데이터 입력 -> 저장

//비동기 함수 생성
async function ExcelTest() {
  //대표행(타이틀행) 설정 및 입력
  sheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 35 },
    { header: 'Birth', key: 'birth', width: 15 },
  ];

  //데이터 추가 (행단위 추가)
  sheet.addRow({ id: 1, name: 'Hong', birth: new Date().toLocaleDateString() });
  sheet.addRow({ id: 2, name: 'Kim', birth: new Date().toLocaleDateString() });

  //엑셀 데이터 저장
  await workbook.xlsx.writeFile('export.xlsx');
}
//실행은 터미널에서 node index,js로 실행
// ExcelTest();
