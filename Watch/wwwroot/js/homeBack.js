$(window).on('scroll', function () {
    var scrollPosition = $(window).scrollTop();
    var newPosition = 0;

    // ��������� ��������� �� ������� ����������
    var imageElement = $('#scrolling-image');
    var images = [];
    var temp;

    for (var i = 0; i < 69; i++) {
        if (i < 10) {
            temp = "00" + i;
        }
        else {
            temp = "0" + i;
        }
        images[i] = { src: '/frames/output(video-cutter-js.com)_' + temp + '.jpg', threshold: i * 50 }
    }

    // ��������� ����� ����� ���� �� ������ ���������
    for (var i = 0; i < images.length; i++) {
        // ��������, �� ������� ������� ��������� �������� ����

        if (scrollPosition >= images[i].threshold) {
            // ������ �������� src ����������
            imageElement.attr('src', images[i].src);

            if (scrollPosition > 2700) {
                imageElement.css('position', 'absolute');
                imageElement.css('top', 2700 + 'px');
            } else {
                imageElement.css('position', 'fixed');
                imageElement.css('top', '0px');
            }
        }
        else {
            break;
        }
    }

    var opacity = (7 / 10) - (scrollPosition / 1000); // ����� 1000 �� ������� �������� ��� ���������� ��������� ������
    $('.background').css('background-color', 'rgba(0, 0, 0, ' + opacity + ')');
});