function readFromTemplateFile(fileName) {
    var fileFullPath = `./files/templates/${fileName}.html`;
    $.ajax({
        url: fileFullPath,
        headers: { "X-My-Custom-Header": "some value" },
        dataType: 'json',
        success: function (data) {
            alert(data);
        }
    });
}