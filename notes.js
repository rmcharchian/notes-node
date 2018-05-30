console.log('Starting notes.js');

console.log(module);  //exports from the module is about the only thing we will ever use



module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
}
