# FanCodeAssignment

Problem 1.  
To increase the performance of the API /tour/matches added pagination to limit the no of data    
  
2 additional parameters added named _pageNo_ and _limit_    
  
_limit_ is used to determine no of data that will be displayed on 1 page.  
_pageNo_ is used to set of data pagewise  

  
Problem 2.  
Added 3 additional fields in SQL query (models file of sports.js)  of /sport/tour/match endpoint  

Problem 3.  
Created a new route, controller and model folder named "newsArticle" for requirement of News Support for Matches and Tours.
  
cURL command of /news/create API
```
curl --location 'http://localhost:3000/news/create' \
--header 'Content-Type: application/json' \
--data '{
    "newsTitle": "Testtingg8",
    "newsDescription": "Testtingg8",
    "matchId": 2,  //optional if tourId is given
    "tourId": 1    //optional if matchId is given
}'

```  
  
cURL command of /news/tour API

```
curl --location 'http://localhost:3000/news/tour?tourId=2'

```
  
cURL command of /news/match API  
  
```
curl --location 'http://localhost:3000/news/match?matchId=1'

```  
  
cURL command of /news/sports API  
  
```
curl --location 'http://localhost:3000/news/sprts?sportsId=1'

``` 
