$('#uploader').on('submit', function(e) {
    e.preventDefault();
    var fData = new FormData($('form')[0]);
    $.ajax({
        url: "upload.php",
        type: "POST",
        data: fData,
        contentType: false,
        processData: false,
        success: function(data) {
            $('#output').html(data);
        }
    });
});
$('#fileUpload').change(function() {
    var myImage = new FileReader();
    myImage.onload = imageReady;
    myImage.readAsDataURL(this.files[0]);
});

function imageReady(e) {
    $('#preview').html('<img src="' + e.target.result + '" class="img-fluid rounded mx-auto d-block">');
    $('#tools').show();
    $('#tools').html('<button type="submit" id="btn-upload" class="btn btn-secondary"><i class="fa fa-cloud-upload" aria-hidden="true"></i> Upload</button> <a href="#" id="btn-delete" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a>');
}

$('#tools').on('click', '#btn-delete', function() {
    $('#preview').html('');
    $('#output').html('');
    $('#fileUpload').val('');
    $('#tools').hide();
});