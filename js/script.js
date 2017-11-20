// new WOW().init();
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['0','1', '2', '3', '4', '5', '6', '7', '8','9'],
        navigation: true,
        scrollBar: true,
        showActiveTooltip: true,
        afterRender: function(){
            new WOW().init();
        },
        navigationPosition: 'left',
        navigationTooltips: ['Команда','Опис проекту', 'Технічні рішення', 'Модель монетизації', 'Можливість масштабування','Дослідження ринку',  'Канали просування', 'Унікальність', 'Перелік потенційних інвесторів', 'Па-ра-па-ра-па-пам' ]
    });
});