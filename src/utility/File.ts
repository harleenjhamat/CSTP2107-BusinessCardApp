
export const readFile = (file) => {
    return new Promise((resolve, reject) => {
      // make a new instance of FileReader
      const reader = new FileReader();
  
      // call bach that is called when u finish loading the file
      reader.onload = (event) => {
        // resolve the promise the loaded file
        resolve(event.target.result);
      };
  
      reader.onerror = (error) => {
        reader.abort();
        reject(error);
      };
  
      // convert file to a data:URL ub a base64 encoded string
      reader.readAsDataURL(file);
    });
  };
  
  // convert the base64 encode string to a blog (a blog is binary with a filename)
  export const base64ToBlob = (base64) => {
    return fetch(base64).then((res) => res.blob());
  };
  