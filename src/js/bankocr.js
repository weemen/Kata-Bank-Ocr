$( document ).ready(function() {
    readFromFile('./paper_docs/accounts.txt')
});

function readFromFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var lines = rawFile.responseText.split('\n');
                for(var line = 0; line < lines.length; line++){
                    console.log(lines[line]);
                }
            }
        }
    }
    rawFile.send(null);
}