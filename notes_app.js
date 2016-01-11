// 3 ways to do an API call

// 1. Proper way to fetch

doIt()
document.getElementById('button').addEventListener('click', doIt)

function doIt () {
  const fetchHeader = {
    method: 'POST',
    headers: {
      'X-Mashape-Key': 'Ml1ilbMVmDmsh31eNTDogCTTKU69p1oFPYzjsnAKQT690Fk7Nd',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  }

  const fetchUrl = 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous'

  window.fetch(fetchUrl, fetchHeader)
    .then(res => res.json())
    .then(function (data) { // handle data here
      console.log(data)
      const quote = document.getElementById('quote')
      quote.innerText = ('\"' + data.quote + '\"')
      const author = document.getElementById('author')
      author.innerText = ('- ' + data.author)
    })
    .catch(err => console.log('Error:', err)) // handle errors here
}



// 2. Mashape's unirest library method

unirest.post("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies")
.header("X-Mashape-Key", "5aIRwDLw2nmshMVivInbuw3WrTxvp1JIV8ljsny7CkgY60B966")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body)
})



// 3. Old fashion Jquery and AJAX method

doIt();
function doIt() {
$.ajax({
  url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
  type: 'POST',
  data: {},
  dataType:'json',
  success: function(data) {
    $("#quote").text("\"" + data.quote + "\"");
    $("#author").text("- " + data.author);
                          },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "ZDRLNucPDUmshnv84BUjqJQcW3ewp1jleEBjsn4t5qLdVhvu5C");} // Enter here your Mashape key
    }); }
