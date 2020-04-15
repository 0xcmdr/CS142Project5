/**
  * FetchModel - Fetch a model from the web server.
  *     url - string - The URL to issue the GET request.
  * Returns: a Promise that should be filled
  * with the response of the GET request parsed
  * as a JSON object and returned in the property
  * named "data" of an object.
  * If the requests has an error the promise should be
  * rejected with an object contain the properties:
  *    status:  The HTTP response status
  *    statusText:  The statusText from the xhr request
  *
*/

export default function fetchModel(url) {
  return new Promise(function(resolve, reject) {
        const xhr= new XMLHttpRequest();
        //sunucudaki durumları dinle
        xhr.onload=function(){
          if(this.readyState === 4)
          {
            //veri başarıyla çekilirse onayla ve veriyi yolla
            if ((this.status == 200) && (this.status < 300)) {
              //Sunucudan çekilen JSON veriyi javascript objesine parse et ve dönder
              resolve({data:JSON.parse(this.response)});
          }
          //yoksa hata metni yolla
            else{
              reject({
                status:this.status,
                statusTExt:this.statusText
              });
            }
        }
        
      }
      //GET isteği için bağlantıyı aç
      xhr.open("GET" , url,true)
      //isteği gönder
      xhr.send();
  });
}