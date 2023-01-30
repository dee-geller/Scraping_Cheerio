//yahooでクラス_3cl937Zpn1ce8mDKd5kp7uを元にスクレイピングしたばあいのソースコード
function myFunction() {
  const content = UrlFetchApp.fetch("https://www.yahoo.co.jp").getContentText();
  const $ = Cheerio.load(content); //コンテントの読み込み 

  let getData = [];

  $('._3cl937Zpn1ce8mDKd5kp7u').each((i,element) => {
    getData.push($(element).text())
  });
  console.log(getData);
}