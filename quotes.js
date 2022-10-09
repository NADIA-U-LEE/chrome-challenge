const quotes = [
    {
      quote : "Love all, trust a few, do wrong to none.",
      author: "― William Shakespeare",
    },    
    {
       quote : "넌 사랑이 뭐라고 생각해?",
       author: "― 형원",
     },    
     {
       quote : "Los peores días te enseñan a vivir",
       author: "― Solsol",
     },    
     {
       quote : "Happy families are all alike; every unhappy family is unhappy in its own way.",
       author: "― Leo Tolstoy, Anna Karenina",
     },    
     {
       quote : "후식 볶음밥은 언제나 옳다.",
       author: "― Chopaa",
     },    
     {
       quote : "겨울에 천원짜리 꼭 들고 다니자.",
       author: "― Chopaa",
     },    
     {
       quote : "아무리 먹어도 배는 터지지 않는다.",
       author: "― Chopaa",
     },    
     {
       quote : "세상 아래 같은 색조는 없다.",
       author: "― Hawaii",
     },    
     {
       quote : "내가 지금까지 이런 세계에 살고 있었다고..?",
       author: "― 코딩을 처음 본 Hawaii",
     },    
     {
       quote : "나는 피가 되고 살이 되는 명언만 기억하고 산다.",
       author: "― Chopaa",
     },    
     {
       quote : "인생은 쉽게 조져지지 않아. 조져지는건 나 뿐.",
       author: "― Chopa",
     },    
     {
       quote : "가는말이 고우면 얕본다.",
       author: "― Hawaii",
     }    
   ];       
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
 