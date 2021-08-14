let iconSelect;

window.onload = function(){

    iconSelect = new IconSelect("controllers-selection");

    var icons = [];
    icons.push({'iconFilePath':'assets/layouts/ps4/logo.svg', 'iconValue':'ps4'});
    icons.push({'iconFilePath':'assets/layouts/xbox-one/logo.svg', 'iconValue':'xboxone'});
    icons.push({'iconFilePath':'assets/layouts/gcc/logo.svg', 'iconValue':'gcc'});
    //icons.push({'iconFilePath':'assets/layouts/procon/logo.svg', 'iconValue':'procon'});

    iconSelect.refresh(icons);

};

