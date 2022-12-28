# Report
## 願景
身為有投票權的人，卻對候選人、政見不了解

-> 希望可以做一個政見 x 新聞懶人包

無奈台灣媒體都不是在討論政見

### <b> 改成讓大家方便地看到選舉相關的新聞 <b>
架設一個新聞網站，讓大家可以上去查閱想了解的議題的相關新聞，提升選舉人了解政治的方便性與容易度。
<br> 
<br>

## 作法
1. 收集 1000 篇新聞，其中 100 篇標上 label 去 train model
2. Tokenization
    - Jieba
    - Dictionary Politic (自己找的關鍵字)
3. 轉換成 TFIDF Vector
4. Use SVM/BN to fit model
5. Evaluation
6. 放上網站供使用者瀏覽