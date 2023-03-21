#Challenge

Data Source<br>
THIRD PARTY API URL : https://s3.amazonaws.com/roxiler.com/product_transaction.json<br>
REQUEST METHOD : GET<br>
RESPONSE FORMAT : JSON<br>

GET<br>
Create API to initialize the database<br>
Fetch the JSON from the third party API and initialize the database with seed data. You are<br>
free to define your own efficient table / collection structure<br>
<br>
Instruction<br>
All the APIs below should take month ( expected value is any month between January to<br>
December ) as an input and should be matched against the field dateOfSale regardless of<br>
the year.<br>
GET<br>
Create an API for statistics<br>
- Total sale amount of selected month<br>
- Total number of sold items of selected month<br>
- Total number of not sold items of selected month<br>
<br>
<br>
GET<br>
Create an API for bar chart ( the response should contain price range and the number of<br>
items in that range for the selected month regardless of the year )<br>
- 0 - 100<br>
- 101 - 200<br>
- 201-300<br>
- 301-400<br>
- 401-500<br>
- 501 - 600<br>
- 601-700<br>
- 701-800<br>
- 801-900<br>
- 901-above<br>
<br>
<br>
GET<br>
Create an API for pie chart<br>
Find unique categories and number of items from that category for the selected month<br>
regardless of the year.<br>
For example :<br>
- X category : 20 (items)<br>
- Y category : 5 (items)<br>
- Z category : 3 (items)<br>
<br>
<br>
GET<br>
Create an API which fetches the data from all the 3 APIs mentioned above, combines<br>
the response and sends a final response of the combined JSON<br>
