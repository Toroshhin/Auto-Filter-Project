window.onload = function() {

  const car = [
    {
      brand: 'Land Rover',
      models: [{
          model: 'Defender',
          modification: ['90', '110', '130'],
          photo: [
          'https://s.auto.drom.ru/i24236/c/photos/generations/500x_land_rover_defender_g9000.jpg?910136',
          'https://s.auto.drom.ru/i24207/c/photos/generations/500x_land_rover_defender_g1680.jpg?695567',
          'https://s.auto.drom.ru/i24236/c/photos/fullsize/land_rover/defender/land_rover_defender_910163.jpg']
      }, {
          model: 'Discovery',
          modification: ['L318', 'L319', 'L462'],
          photo: [
          'https://s.auto.drom.ru/i24226/c/photos/generations/500x_land_rover_discovery_g9037.jpg?849613',
          'https://s.auto.drom.ru/i24198/c/photos/generations/500x_land_rover_discovery_g4077.jpg?572685',
          'https://s.auto.drom.ru/i24202/c/photos/generations/500x_land_rover_discovery_g7213.jpg?640426']
      }, {
          model: 'Freelander',
          modification: ['I', 'I Рестайлинг', 'II', 'II Рестайлинг', 'II Рестайлинг 2'],
          photo: [
          'https://s.auto.drom.ru/i24198/c/photos/generations/500x_land_rover_freelander_g6153.jpg?565090',
          'https://s.auto.drom.ru/i24198/c/photos/generations/500x_land_rover_freelander_g6149.jpg?572269',
          'https://s.auto.drom.ru/i24198/c/photos/generations/500x_land_rover_freelander_g5599.jpg?553667',
          'https://s.auto.drom.ru/i24195/c/photos/generations/500x_land_rover_freelander_g1682.jpg?424811',
          'https://s.auto.drom.ru/i24195/c/photos/generations/500x_land_rover_freelander_g4378.jpg?424827']
      }, {
          model: 'Evoque',
          modification: ['I', 'I Рестайлинг', 'II'],
          photo: [
          'https://s.auto.drom.ru/img1/catalog/photos/generations/500x_land_rover_range_rover_evoque_g1684.jpg?30114',
          'https://s.auto.drom.ru/i24195/c/photos/generations/500x_land_rover_range_rover_evoque_g4494.jpg?445377',
          'https://s.auto.drom.ru/i24227/c/photos/generations/500x_land_rover_range_rover_evoque_g9274.jpg?861724']
      },
        {
          model: 'Range Rover Sport',
          modification: ['L320', 'L494'],
          photo: [
          'https://s.auto.drom.ru/i24198/c/photos/generations/500x_land_rover_range_rover_sport_g5523.jpg?552195',
          'https://s.auto.drom.ru/i24214/c/photos/generations/500x_land_rover_range_rover_sport_g7891.jpg?759694']
      }]
    },
    {
      brand: 'Nissan',
      models: [{
        model: 'Almera',
        modification: ['I (N15)', 'II (N16)', 'II (N16) Рестайлинг', 'III (G15)'],
        photo: [
          'https://s.auto.drom.ru/i24218/c/photos/generations/500x_nissan_almera_g8137.jpg?789390',
          'https://s.auto.drom.ru/i24207/c/photos/generations/500x_nissan_almera_g5950.jpg?700652',
          'https://s.auto.drom.ru/i24195/c/photos/generations/500x_nissan_almera_g913.jpg?378977',
          'https://s.auto.drom.ru/img4/catalog/photos/generations/500x_nissan_almera_g1967.jpg?112041']
      }, {
        model: 'Pathfinder',
        modification: ['I', 'II', 'III', 'III Рестайлинг', 'IV'],
        photo: [
          'https://s.auto.drom.ru/i24224/c/photos/generations/500x_nissan_pathfinder_g8580.jpg?832005',
          'https://s.auto.drom.ru/i24207/c/photos/generations/500x_nissan_pathfinder_g6290.jpg?697481',
          'https://s.auto.drom.ru/i24224/c/photos/generations/500x_nissan_pathfinder_g8577.jpg?832019',
          'https://s.auto.drom.ru/i24224/c/photos/generations/500x_nissan_pathfinder_g8578.jpg?832039',
          'https://s.auto.drom.ru/img4/catalog/photos/generations/500x_nissan_pathfinder_g2253.jpg?115951']
      }, {
        model: 'Qashqai',
        modification: ['J10', 'J11'],
        photo: [
          'https://s.auto.drom.ru/img1/catalog/photos/generations/500x_nissan_qashqai_g1269.jpg?25630',
          'https://s.auto.drom.ru/i24219/c/photos/generations/500x_nissan_qashqai_g8251.jpg?798569']
      }, {
        model: 'X-Trail',
        modification: ['T30', 'T31', 'T32'],
        photo: [
          'https://s.auto.drom.ru/img5/catalog/photos/generations/500x_nissan_x-trail_g920.jpg?284617',
          'https://s.auto.drom.ru/img5/catalog/photos/generations/500x_nissan_x-trail_g3971.jpg?289519',
          'https://s.auto.drom.ru/i24219/c/photos/generations/500x_nissan_x-trail_g7565.jpg?798616', ]
      }]
    }, {
      brand: 'Toyota',
      models: [
        {
          model: 'Camry',
          modification: ['V10', 'V20', 'V30', 'V40', 'V50', 'XV40', 'XV50'],
          photo: [
            'https://s.auto.drom.ru/i24219/c/photos/generations/500x_toyota_camry_g8298.jpg?802861',
            'https://s.auto.drom.ru/i24207/c/photos/generations/500x_toyota_camry_g6392.jpg?700055',
            'https://s.auto.drom.ru/i24213/c/photos/generations/500x_toyota_camry_g4168.jpg?756053',
            'https://s.auto.drom.ru/i24207/c/photos/generations/500x_toyota_camry_g4193.jpg?700053',
            'https://s.auto.drom.ru/i24196/c/photos/generations/500x_toyota_camry_g1447.jpg?467542',
            'https://s.auto.drom.ru/i24208/c/photos/generations/500x_toyota_camry_g7604.jpg?708625',
            'https://s.auto.drom.ru/i24220/c/photos/generations/500x_toyota_camry_g7683.jpg?803542', ]
        },
        {
          model: 'Corolla',
          modification: ['E120', 'E150', 'E180', 'E210'],
          photo: [
            'https://s.auto.drom.ru/i24195/c/photos/generations/500x_toyota_corolla_g901.jpg?404374',
            'https://s.auto.drom.ru/i24195/c/photos/generations/500x_toyota_corolla_g4525.jpg?453811',
            'https://s.auto.drom.ru/i24207/c/photos/generations/500x_toyota_corolla_g5440.jpg?699963',
            'https://s.auto.drom.ru/i24229/c/photos/generations/500x_toyota_corolla_g9402.jpg?871414', ]
        }, {
          model: 'Crown',
          modification: ['S120', 'S140', 'S150', 'S170', 'S180', 'S200', 'S210'],
          photo: [
            'https://s.auto.drom.ru/i24207/c/photos/generations/500x_toyota_crown_g6411.jpg?697208',
            'https://s.auto.drom.ru/img1/catalog/photos/generations/500x_toyota_crown_g683.jpg?21080',
            'https://s.auto.drom.ru/img1/catalog/photos/generations/500x_toyota_crown_g684.jpg?20460',
            'https://s.auto.drom.ru/i24197/c/photos/generations/500x_toyota_crown_g685.jpg?502587',
            'https://s.auto.drom.ru/i24197/c/photos/generations/500x_toyota_crown_g4873.jpg?503277',
            'https://s.auto.drom.ru/i24197/c/photos/generations/500x_toyota_crown_g4877.jpg?504969',
            'https://s.auto.drom.ru/i24222/c/photos/fullsize/toyota/crown/toyota_crown_820696.jpg', ]
        }, {
          model: 'Land Cruiser',
          modification: ['80 Series', '100 Series', '200 Series', ],
          photo: [
            'https://s.auto.drom.ru/i24218/c/photos/generations/500x_toyota_land_cruiser_g8190.jpg?791671',
            'https://s.auto.drom.ru/i24207/c/photos/generations/500x_toyota_land_cruiser_g4552.jpg?699728',
            'https://s.auto.drom.ru/i24207/c/photos/generations/500x_toyota_land_cruiser_g4531.jpg?699944', ]
        }]
    }, {
      brand: 'Volkswagen',
      models: [{
        model: 'Golf',
        modification: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'],
        photo: [
          'https://s.auto.drom.ru/i24215/c/photos/generations/500x_volkswagen_golf_g7967.jpg?768639',
          'https://s.auto.drom.ru/i24215/c/photos/generations/500x_volkswagen_golf_g7970.jpg?768867',
          'https://s.auto.drom.ru/img4/catalog/photos/generations/500x_volkswagen_golf_g3585.jpg?183696',
          'https://s.auto.drom.ru/i24235/c/photos/generations/500x_volkswagen_golf_g10022.jpg?902704',
          'https://s.auto.drom.ru/img4/catalog/photos/generations/500x_volkswagen_golf_g3594.jpg?188104',
          'https://s.auto.drom.ru/img4/catalog/photos/generations/500x_volkswagen_golf_g3511.jpg?191749',
          'https://s.auto.drom.ru/i24207/c/photos/generations/500x_volkswagen_golf_g7336.jpg?700462',
          'https://s.auto.drom.ru/i24238/c/photos/generations/500x_volkswagen_golf_g9858.jpg?923808', ]
      }, {
        model: 'Jetta',
        modification: ['5 Поколение', '6 Поколение', '6 Поколение Рестайлинг', '7 Поколение'],
        photo: [
          'https://s.auto.drom.ru/i24224/c/photos/generations/500x_volkswagen_jetta_g5321.jpg?836754',
          'https://s.auto.drom.ru/img4/catalog/photos/generations/500x_volkswagen_jetta_g1488.jpg?77130',
          'https://s.auto.drom.ru/i24195/c/photos/generations/500x_volkswagen_jetta_g4134.jpg?379066',
          'https://s.auto.drom.ru/i24237/c/photos/generations/500x_volkswagen_jetta_g8124.jpg?917659', ]
      }, {
        model: 'Passat',
        modification: ['B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B8,5'],
        photo: [
          'https://s.auto.drom.ru/img5/catalog/photos/generations/500x_volkswagen_passat_g3740.jpg?218679',
          'https://s.auto.drom.ru/i24195/c/photos/generations/500x_volkswagen_passat_g3737.jpg?385235',
          'https://s.auto.drom.ru/img5/catalog/photos/generations/500x_volkswagen_passat_g3717.jpg?214882',
          'https://s.auto.drom.ru/img5/catalog/photos/generations/500x_volkswagen_passat_g3704.jpg?211131',
          'https://s.auto.drom.ru/i24213/c/photos/generations/500x_volkswagen_passat_g3690.jpg?756947',
          'https://s.auto.drom.ru/i24207/c/photos/generations/500x_volkswagen_passat_g3682.jpg?695232',
          'https://s.auto.drom.ru/i24230/c/photos/generations/500x_volkswagen_passat_g9473.jpg?876861',
          'https://s.auto.drom.ru/i24207/c/photos/generations/500x_volkswagen_passat_g3682.jpg?695232', ]
      }, {
        model: 'Polo',
        modification: ['Mk2', 'Mk3', 'Mk4', 'Mk5'],
        photo: [
          'https://s.auto.drom.ru/i24224/c/photos/generations/500x_volkswagen_polo_g3663.jpg?837794',
          'https://s.auto.drom.ru/i24224/c/photos/generations/500x_volkswagen_polo_g8750.jpg?837949',
          'https://s.auto.drom.ru/img4/catalog/photos/generations/500x_volkswagen_polo_g3630.jpg?201281',
          'https://s.auto.drom.ru/img4/catalog/photos/generations/500x_volkswagen_polo_g3614.jpg?198882', ]
      }, {
        model: 'Tiguan',
        modification: ['I', 'I Рестайлинг', 'II'],
        photo: [
          'https://s.auto.drom.ru/i24195/c/photos/generations/500x_volkswagen_tiguan_g1494.jpg?383905',
          'https://s.auto.drom.ru/i24195/c/photos/generations/500x_volkswagen_tiguan_g4135.jpg?381440',
          'https://s.auto.drom.ru/i24206/c/photos/generations/500x_volkswagen_tiguan_g6595.jpg?680935', ]
      }]
    },
  ];

  const carBrands = document.querySelector('#brand');
  const carModels = document.querySelector('#model');
  const carModifications = document.querySelector('#modification');
  const searchButton = document.querySelector('#button');



  fillFormBrand(carBrands);




  let idBrand;

  carBrands.onchange = function() {
    idBrand = carBrands.selectedIndex - 1;
    fillFormModel(carModels, idBrand);
    idModification = undefined;
    cleaningForm('.modificationOption', carModifications.length);
  }

  let idModel;
  carModels.onchange = function() {
    idModel = carModels.selectedIndex - 1;
    fillFormModification(carModifications, idBrand, idModel);
    idModification = 0;
  }

  let idModification;
  carModifications.onchange = function() {
    idModification = carModifications.selectedIndex - 1;
  }


  searchButton.onclick = function() {
    if (idBrand !== undefined && idModel !== undefined && idModification !== undefined && carBrands.value !==
      'Марка' && carModels.value !== 'Модель' && carModifications.value !== 'Модификация') {
      upduteUI(idBrand, idModel, idModification);
    }

  }



  //Вывод данных из БД в select
  function fillFormBrand(classBrand) {
    //Вывод брендов в select
    for (let i = 0; i < car.length; i++) {
      let option = document.createElement('option');
      classBrand.append(option);
      option.className = 'brandOption';
      option.innerHTML = car[i].brand;
    }
  }

  function fillFormModel(classmodel, idBrand) {
    //Вывод моделей в select
    for (let i = 0; i < car[idBrand].models.length; i++) {
      let option = document.createElement('option');
      classmodel.append(option);
      option.className = 'modelOption';
      option.innerHTML = car[idBrand].models[i].model;
    }

  }

  function fillFormModification(classModificatoin, idBrand, idModel) {
    let formModificationLength = document.getElementsByClassName('modificationOption').length
    for (let i = 0; i < formModificationLength; i++) {
      let formModification = document.querySelector('.modificationOption');
      formModification.remove();
    }
    //Вывод модицикаций в select
    for (let i = 0; i < car[idBrand].models[idModel].modification.length; i++) {
      let option = document.createElement('option');
      classModificatoin.append(option);
      option.className = 'modificationOption';
      option.innerHTML = car[idBrand].models[idModel].modification[i];
    }
  }

  function cleaningForm(className, listLength) {
    for (let i = 0; i < listLength; i++) {
      let classForm = document.querySelector(className);
      classForm.remove();
    }
  }


  function upduteUI(idBrand, idModel, idModification) {
    //Удаление постов
    let advLength = document.getElementsByClassName('advert').length
    for (let i = 0; i < advLength; i++) {
      let advert = document.querySelector('.advert');
      advert.remove();
    }

    //Добавление поста
    let ads = document.querySelector('.ads');
    let div = document.createElement('div');
    div.className = 'advert';
    ads.append(div);

    //Добавление картинки в пост
    let img = document.createElement('img');
    img.className = 'advert__img'
    img.src = car[idBrand].models[idModel].photo[idModification];
    div.append(img);

    //Добавление бренда в пост
    var p = document.createElement('p');
    p.className = 'advert__brand'
    p.innerHTML = car[idBrand].brand;
    div.append(p);

    //Добавление модели в пост
    var p = document.createElement('p');
    p.className = 'advert__brand'
    p.innerHTML = car[idBrand].models[idModel].model;
    div.append(p);

    //Добавление модификации в пост
    var span = document.createElement('span');
    span.className = 'advert_modification'
    span.innerHTML = ' (' + car[idBrand].models[idModel].modification[idModification] + ')';
    p.append(span);


  }
}
