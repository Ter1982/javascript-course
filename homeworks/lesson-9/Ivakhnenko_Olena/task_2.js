const checkPassword = password => new RegExp(/^[\w\s!"$%&'()*+,\-.\/:;<=>?@\[\\\]^`{|}]{1,32}$/, 'g').test(password);
console.log(checkPassword('Wa$%&\'( )*+,1-./:;< =>?@[\\]^`{}|'));