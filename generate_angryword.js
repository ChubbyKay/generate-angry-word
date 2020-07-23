//產生隨選項目
function randomIndex(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

//設定幹話產生函式
function generateAngryWord(job) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (job === 'engineer') {
    return (`身為一個工程師，${randomIndex(task.engineer)}，${randomIndex(phrase)}吧！`)
  } else if (job === 'designer') {
    return (`身為一個設計師，${randomIndex(task.designer)}，${randomIndex(phrase)}吧！`)
  } else if (job === 'entrepreneur') {
    return (`身為一個創業家，${randomIndex(task.entrepreneur)}，${randomIndex(phrase)}吧！`)
  } else {
    return (`請選擇一個職業！`)
  }
}
module.exports = generateAngryWord

