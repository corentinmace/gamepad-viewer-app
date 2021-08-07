let iconSelect;

window.onload = function(){

    iconSelect = new IconSelect("controllers-selection");

    var icons = [];
    icons.push({'iconFilePath':'assets/ps4/logo.svg', 'iconValue':'ps4'});
    icons.push({'iconFilePath':'assets/xbox-one/logo.svg', 'iconValue':'xboxone'});
    icons.push({'iconFilePath':'assets/gcc/logo.svg', 'iconValue':'gcc'});
    //icons.push({'iconFilePath':'assets/procon/logo.svg', 'iconValue':'procon'});

    iconSelect.refresh(icons);

};

