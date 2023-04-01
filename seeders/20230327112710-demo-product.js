"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        name: "augue quam sollicitudin vitae",
        description:
          "auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis",
        price: 76.57,
        discount: null,
        category: null,
        quantity: 2,
        image: "http://dummyimage.com/3946x4740.png/5fa2dd/ffffff",
      },
      {
        name: "curae donec pharetra magna",
        description:
          "ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus",
        price: 2.17,
        discount: 35,
        category: null,
        quantity: 7,
        image: "http://dummyimage.com/3718x4310.png/dddddd/000000",
      },
      {
        name: "aenean auctor gravida sem praesent id massa id",
        description:
          "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id",
        price: 11.1,
        discount: null,
        category: null,
        quantity: 22,
        image: "http://dummyimage.com/4496x4634.png/5fa2dd/ffffff",
      },
      {
        name: "purus phasellus in felis donec semper sapien a",
        description:
          "et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus",
        price: 33.54,
        discount: null,
        category: null,
        quantity: 95,
        image: "http://dummyimage.com/4128x3880.png/cc0000/ffffff",
      },
      {
        name: "justo pellentesque viverra pede ac diam cras",
        description:
          "praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras",
        price: 44.18,
        discount: null,
        category: null,
        quantity: 28,
        image: "http://dummyimage.com/4185x4129.png/ff4444/ffffff",
      },
      {
        name: "velit id pretium iaculis",
        description:
          "justo eu massa donec dapibus duis at velit eu est congue elementum",
        price: 49.86,
        discount: null,
        category: null,
        quantity: 65,
        image: "http://dummyimage.com/4741x4957.png/dddddd/000000",
      },
      {
        name: "vulputate ut ultrices vel augue vestibulum",
        description:
          "maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum",
        price: 9.64,
        discount: 24,
        category: null,
        quantity: 83,
        image: "http://dummyimage.com/4130x4378.png/ff4444/ffffff",
      },
      {
        name: "pretium nisl ut volutpat sapien arcu",
        description:
          "quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer",
        price: 71.6,
        discount: 17,
        category: null,
        quantity: 36,
        image: "http://dummyimage.com/4384x4188.png/dddddd/000000",
      },
      {
        name: "posuere cubilia curae duis faucibus accumsan odio curabitur",
        description:
          "mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis",
        price: 51.2,
        discount: null,
        category: null,
        quantity: 66,
        image: "http://dummyimage.com/4004x3928.png/cc0000/ffffff",
      },
      {
        name: "mi nulla ac enim",
        description:
          "imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue",
        price: 87.89,
        discount: null,
        category: null,
        quantity: 39,
        image: "http://dummyimage.com/4270x4916.png/dddddd/000000",
      },
      {
        name: "cursus id turpis integer aliquet massa id",
        description:
          "lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id",
        price: 93.05,
        discount: null,
        category: null,
        quantity: 76,
        image: "http://dummyimage.com/4521x4155.png/ff4444/ffffff",
      },
      {
        name: "commodo placerat praesent blandit nam nulla",
        description:
          "vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in",
        price: 15.52,
        discount: null,
        category: null,
        quantity: 10,
        image: "http://dummyimage.com/4821x4670.png/cc0000/ffffff",
      },
      {
        name: "justo nec condimentum neque sapien",
        description:
          "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id",
        price: 12.97,
        discount: null,
        category: null,
        quantity: 31,
        image: "http://dummyimage.com/3528x4749.png/dddddd/000000",
      },
      {
        name: "duis ac nibh fusce lacus",
        description:
          "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea",
        price: 15.87,
        discount: 19,
        category: null,
        quantity: 94,
        image: "http://dummyimage.com/4565x4454.png/ff4444/ffffff",
      },
      {
        name: "fusce congue diam id ornare imperdiet",
        description:
          "accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus",
        price: 97.53,
        discount: 22,
        category: null,
        quantity: 3,
        image: "http://dummyimage.com/4849x4829.png/ff4444/ffffff",
      },
      {
        name: "dapibus at diam nam",
        description:
          "etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna",
        price: 72.06,
        discount: null,
        category: null,
        quantity: 67,
        image: "http://dummyimage.com/4009x4781.png/ff4444/ffffff",
      },
      {
        name: "pede ac diam cras",
        description:
          "nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede",
        price: 90.26,
        discount: null,
        category: null,
        quantity: 18,
        image: "http://dummyimage.com/4562x4205.png/cc0000/ffffff",
      },
      {
        name: "potenti cras in purus eu",
        description:
          "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis",
        price: 18.9,
        discount: 24,
        category: null,
        quantity: 2,
        image: "http://dummyimage.com/4285x3751.png/ff4444/ffffff",
      },
      {
        name: "luctus cum sociis natoque penatibus",
        description:
          "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis",
        price: 14.53,
        discount: 22,
        category: null,
        quantity: 62,
        image: "http://dummyimage.com/4616x4817.png/cc0000/ffffff",
      },
      {
        name: "quis turpis sed ante vivamus",
        description:
          "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien",
        price: 81.34,
        discount: null,
        category: null,
        quantity: 69,
        image: "http://dummyimage.com/4943x3804.png/cc0000/ffffff",
      },
      {
        name: "interdum in ante vestibulum",
        description:
          "felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae",
        price: 47.01,
        discount: null,
        category: null,
        quantity: 28,
        image: "http://dummyimage.com/4796x3884.png/ff4444/ffffff",
      },
      {
        name: "interdum in ante vestibulum ante ipsum primis in",
        description:
          "sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi",
        price: 35.52,
        discount: null,
        category: null,
        quantity: 30,
        image: "http://dummyimage.com/4776x4268.png/ff4444/ffffff",
      },
      {
        name: "nulla eget eros elementum pellentesque quisque porta",
        description:
          "metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris",
        price: 67.6,
        discount: null,
        category: null,
        quantity: 1,
        image: "http://dummyimage.com/3825x4990.png/5fa2dd/ffffff",
      },
      {
        name: "in blandit ultrices enim",
        description:
          "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis",
        price: 22.18,
        discount: null,
        category: null,
        quantity: 49,
        image: "http://dummyimage.com/3759x4391.png/dddddd/000000",
      },
      {
        name: "vivamus vestibulum sagittis sapien cum sociis",
        description:
          "lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst",
        price: 18.09,
        discount: null,
        category: null,
        quantity: 37,
        image: "http://dummyimage.com/4641x4345.png/ff4444/ffffff",
      },
      {
        name: "at velit vivamus vel",
        description:
          "non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis",
        price: 13.73,
        discount: null,
        category: null,
        quantity: 5,
        image: "http://dummyimage.com/4115x4026.png/5fa2dd/ffffff",
      },
      {
        name: "sapien in sapien iaculis",
        description:
          "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque",
        price: 41.08,
        discount: 29,
        category: null,
        quantity: 55,
        image: "http://dummyimage.com/3990x4183.png/5fa2dd/ffffff",
      },
      {
        name: "sapien dignissim vestibulum vestibulum ante ipsum",
        description:
          "a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel",
        price: 81.19,
        discount: 24,
        category: null,
        quantity: 69,
        image: "http://dummyimage.com/4653x3968.png/ff4444/ffffff",
      },
      {
        name: "at nulla suspendisse potenti cras",
        description:
          "quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris",
        price: 46.77,
        discount: null,
        category: null,
        quantity: 84,
        image: "http://dummyimage.com/4507x4779.png/cc0000/ffffff",
      },
      {
        name: "duis faucibus accumsan odio curabitur convallis duis consequat",
        description:
          "cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel",
        price: 62.26,
        discount: 26,
        category: null,
        quantity: 42,
        image: "http://dummyimage.com/3550x4578.png/cc0000/ffffff",
      },
      {
        name: "ligula pellentesque ultrices phasellus id sapien in",
        description:
          "vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat",
        price: 98.88,
        discount: null,
        category: null,
        quantity: 76,
        image: "http://dummyimage.com/4569x3908.png/dddddd/000000",
      },
      {
        name: "luctus cum sociis natoque penatibus et magnis dis",
        description:
          "in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae",
        price: 63.54,
        discount: null,
        category: null,
        quantity: 72,
        image: "http://dummyimage.com/3579x4819.png/ff4444/ffffff",
      },
      {
        name: "nisi at nibh in hac",
        description:
          "sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut",
        price: 40.11,
        discount: 1,
        category: null,
        quantity: 4,
        image: "http://dummyimage.com/4099x4855.png/cc0000/ffffff",
      },
      {
        name: "blandit ultrices enim lorem",
        description:
          "eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh",
        price: 74.23,
        discount: null,
        category: null,
        quantity: 48,
        image: "http://dummyimage.com/4441x4287.png/5fa2dd/ffffff",
      },
      {
        name: "semper est quam pharetra magna ac consequat metus",
        description:
          "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et",
        price: 42.81,
        discount: null,
        category: null,
        quantity: 95,
        image: "http://dummyimage.com/3661x3669.png/ff4444/ffffff",
      },
      {
        name: "nascetur ridiculus mus etiam",
        description:
          "eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet",
        price: 15.38,
        discount: null,
        category: null,
        quantity: 57,
        image: "http://dummyimage.com/4145x3992.png/cc0000/ffffff",
      },
      {
        name: "lectus pellentesque eget nunc donec",
        description:
          "rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien",
        price: 77.13,
        discount: 30,
        category: null,
        quantity: 91,
        image: "http://dummyimage.com/4730x4317.png/dddddd/000000",
      },
      {
        name: "orci luctus et ultrices posuere",
        description:
          "at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi",
        price: 63.59,
        discount: 15,
        category: null,
        quantity: 84,
        image: "http://dummyimage.com/4586x4315.png/cc0000/ffffff",
      },
      {
        name: "ultrices vel augue vestibulum ante ipsum primis in",
        description:
          "ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non",
        price: 46.07,
        discount: null,
        category: null,
        quantity: 39,
        image: "http://dummyimage.com/3963x4974.png/ff4444/ffffff",
      },
      {
        name: "vestibulum sit amet cursus id turpis integer",
        description:
          "aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum",
        price: 8.5,
        discount: null,
        category: null,
        quantity: 8,
        image: "http://dummyimage.com/4441x4208.png/ff4444/ffffff",
      },
      {
        name: "enim in tempor turpis",
        description:
          "metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
        price: 58.79,
        discount: null,
        category: null,
        quantity: 18,
        image: "http://dummyimage.com/3769x3773.png/dddddd/000000",
      },
      {
        name: "leo maecenas pulvinar lobortis est phasellus sit amet",
        description:
          "at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque",
        price: 80.21,
        discount: 27,
        category: null,
        quantity: 2,
        image: "http://dummyimage.com/4367x3650.png/5fa2dd/ffffff",
      },
      {
        name: "nascetur ridiculus mus etiam vel augue vestibulum rutrum",
        description:
          "luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac",
        price: 92.32,
        discount: null,
        category: null,
        quantity: 18,
        image: "http://dummyimage.com/4974x3612.png/dddddd/000000",
      },
      {
        name: "tincidunt lacus at velit",
        description:
          "mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus",
        price: 49.96,
        discount: null,
        category: null,
        quantity: 82,
        image: "http://dummyimage.com/4679x4607.png/ff4444/ffffff",
      },
      {
        name: "habitasse platea dictumst aliquam augue quam",
        description:
          "quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa",
        price: 94.86,
        discount: 29,
        category: null,
        quantity: 26,
        image: "http://dummyimage.com/4830x4046.png/ff4444/ffffff",
      },
      {
        name: "ipsum integer a nibh",
        description:
          "duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis",
        price: 97.36,
        discount: 3,
        category: null,
        quantity: 27,
        image: "http://dummyimage.com/4334x4733.png/5fa2dd/ffffff",
      },
      {
        name: "pede lobortis ligula sit",
        description:
          "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti",
        price: 72.4,
        discount: null,
        category: null,
        quantity: 55,
        image: "http://dummyimage.com/4468x3695.png/5fa2dd/ffffff",
      },
      {
        name: "a libero nam dui proin",
        description:
          "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit",
        price: 39.26,
        discount: null,
        category: null,
        quantity: 1,
        image: "http://dummyimage.com/4262x4659.png/cc0000/ffffff",
      },
      {
        name: "dis parturient montes nascetur ridiculus",
        description:
          "posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta",
        price: 14.32,
        discount: null,
        category: null,
        quantity: 68,
        image: "http://dummyimage.com/4789x4603.png/cc0000/ffffff",
      },
      {
        name: "erat curabitur gravida nisi at nibh",
        description:
          "non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet",
        price: 60.92,
        discount: null,
        category: null,
        quantity: 9,
        image: "http://dummyimage.com/4768x4636.png/ff4444/ffffff",
      },
      {
        name: "ac consequat metus sapien",
        description:
          "elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
        price: 16.29,
        discount: 23,
        category: null,
        quantity: 5,
        image: "http://dummyimage.com/3502x3573.png/ff4444/ffffff",
      },
      {
        name: "penatibus et magnis dis parturient montes nascetur ridiculus",
        description:
          "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra",
        price: 54.77,
        discount: null,
        category: null,
        quantity: 18,
        image: "http://dummyimage.com/4535x4872.png/dddddd/000000",
      },
      {
        name: "sem fusce consequat nulla nisl",
        description:
          "nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit",
        price: 34.99,
        discount: null,
        category: null,
        quantity: 15,
        image: "http://dummyimage.com/4728x4380.png/ff4444/ffffff",
      },
      {
        name: "pellentesque ultrices phasellus id sapien in",
        description:
          "consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor",
        price: 59.37,
        discount: 15,
        category: null,
        quantity: 10,
        image: "http://dummyimage.com/4194x3913.png/dddddd/000000",
      },
      {
        name: "imperdiet sapien urna pretium",
        description:
          "dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus",
        price: 83.36,
        discount: null,
        category: null,
        quantity: 65,
        image: "http://dummyimage.com/3737x4317.png/5fa2dd/ffffff",
      },
      {
        name: "dolor vel est donec odio justo",
        description:
          "malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non",
        price: 49.91,
        discount: null,
        category: null,
        quantity: 99,
        image: "http://dummyimage.com/4009x4198.png/ff4444/ffffff",
      },
      {
        name: "vitae mattis nibh ligula nec sem duis aliquam",
        description:
          "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat",
        price: 90.63,
        discount: null,
        category: null,
        quantity: 41,
        image: "http://dummyimage.com/4741x3808.png/dddddd/000000",
      },
      {
        name: "commodo placerat praesent blandit",
        description:
          "sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam",
        price: 79.37,
        discount: null,
        category: null,
        quantity: 55,
        image: "http://dummyimage.com/4110x3971.png/5fa2dd/ffffff",
      },
      {
        name: "semper interdum mauris ullamcorper purus",
        description:
          "purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
        price: 7.3,
        discount: null,
        category: null,
        quantity: 46,
        image: "http://dummyimage.com/4179x4697.png/dddddd/000000",
      },
      {
        name: "magnis dis parturient montes",
        description:
          "morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin",
        price: 8.66,
        discount: 14,
        category: null,
        quantity: 19,
        image: "http://dummyimage.com/3609x3641.png/5fa2dd/ffffff",
      },
      {
        name: "est congue elementum in hac",
        description:
          "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero",
        price: 55.75,
        discount: null,
        category: null,
        quantity: 63,
        image: "http://dummyimage.com/4303x4907.png/cc0000/ffffff",
      },
      {
        name: "dolor sit amet consectetuer adipiscing elit proin",
        description:
          "pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien",
        price: 58.5,
        discount: null,
        category: null,
        quantity: 92,
        image: "http://dummyimage.com/4563x4546.png/cc0000/ffffff",
      },
      {
        name: "at vulputate vitae nisl aenean",
        description:
          "sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
        price: 41.02,
        discount: null,
        category: null,
        quantity: 41,
        image: "http://dummyimage.com/4292x3712.png/dddddd/000000",
      },
      {
        name: "magnis dis parturient montes",
        description:
          "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
        price: 16.56,
        discount: null,
        category: null,
        quantity: 53,
        image: "http://dummyimage.com/4358x4812.png/5fa2dd/ffffff",
      },
      {
        name: "nascetur ridiculus mus etiam vel",
        description:
          "ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut",
        price: 36.34,
        discount: null,
        category: null,
        quantity: 69,
        image: "http://dummyimage.com/4649x4161.png/5fa2dd/ffffff",
      },
      {
        name: "potenti cras in purus eu magna vulputate",
        description:
          "ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna",
        price: 95.93,
        discount: null,
        category: null,
        quantity: 47,
        image: "http://dummyimage.com/4938x4170.png/cc0000/ffffff",
      },
      {
        name: "non quam nec dui luctus rutrum nulla",
        description:
          "commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id",
        price: 51.98,
        discount: 10,
        category: null,
        quantity: 10,
        image: "http://dummyimage.com/3829x4461.png/dddddd/000000",
      },
      {
        name: "eu sapien cursus vestibulum proin eu mi nulla",
        description:
          "tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo",
        price: 65.1,
        discount: 35,
        category: null,
        quantity: 27,
        image: "http://dummyimage.com/4224x4419.png/ff4444/ffffff",
      },
      {
        name: "luctus ultricies eu nibh",
        description:
          "posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus",
        price: 55.95,
        discount: 20,
        category: null,
        quantity: 64,
        image: "http://dummyimage.com/4521x4218.png/cc0000/ffffff",
      },
      {
        name: "nulla quisque arcu libero rutrum ac lobortis vel",
        description:
          "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis",
        price: 38.95,
        discount: 11,
        category: null,
        quantity: 68,
        image: "http://dummyimage.com/3688x4171.png/dddddd/000000",
      },
      {
        name: "ut nulla sed accumsan",
        description:
          "orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet",
        price: 76.33,
        discount: null,
        category: null,
        quantity: 58,
        image: "http://dummyimage.com/4022x3586.png/ff4444/ffffff",
      },
      {
        name: "dictumst morbi vestibulum velit id pretium iaculis diam",
        description:
          "ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus",
        price: 24.49,
        discount: null,
        category: null,
        quantity: 52,
        image: "http://dummyimage.com/4565x4776.png/ff4444/ffffff",
      },
      {
        name: "aliquet ultrices erat tortor sollicitudin mi sit amet",
        description:
          "imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate",
        price: 27.2,
        discount: 18,
        category: null,
        quantity: 37,
        image: "http://dummyimage.com/4767x3839.png/dddddd/000000",
      },
      {
        name: "est risus auctor sed tristique in",
        description:
          "mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum",
        price: 6.56,
        discount: null,
        category: null,
        quantity: 81,
        image: "http://dummyimage.com/4377x4778.png/dddddd/000000",
      },
      {
        name: "lobortis vel dapibus at diam nam tristique tortor",
        description:
          "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec",
        price: 40.8,
        discount: null,
        category: null,
        quantity: 36,
        image: "http://dummyimage.com/4171x4440.png/dddddd/000000",
      },
      {
        name: "mauris eget massa tempor convallis nulla",
        description:
          "nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in",
        price: 17.34,
        discount: null,
        category: null,
        quantity: 15,
        image: "http://dummyimage.com/4063x4929.png/ff4444/ffffff",
      },
      {
        name: "consequat in consequat ut nulla sed accumsan felis",
        description:
          "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec",
        price: 50.01,
        discount: null,
        category: null,
        quantity: 6,
        image: "http://dummyimage.com/4453x4058.png/cc0000/ffffff",
      },
      {
        name: "accumsan tortor quis turpis sed",
        description:
          "accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a",
        price: 57.87,
        discount: null,
        category: null,
        quantity: 88,
        image: "http://dummyimage.com/4679x3839.png/5fa2dd/ffffff",
      },
      {
        name: "et ultrices posuere cubilia curae duis faucibus",
        description:
          "rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi",
        price: 51.82,
        discount: null,
        category: null,
        quantity: 2,
        image: "http://dummyimage.com/4404x4489.png/dddddd/000000",
      },
      {
        name: "mauris viverra diam vitae quam suspendisse potenti nullam",
        description:
          "pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est",
        price: 59.39,
        discount: 13,
        category: null,
        quantity: 27,
        image: "http://dummyimage.com/4818x4939.png/dddddd/000000",
      },
      {
        name: "tristique est et tempus semper",
        description:
          "cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis",
        price: 47.31,
        discount: null,
        category: null,
        quantity: 23,
        image: "http://dummyimage.com/4437x4595.png/5fa2dd/ffffff",
      },
      {
        name: "dui proin leo odio porttitor id consequat in",
        description:
          "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante",
        price: 76.54,
        discount: null,
        category: null,
        quantity: 48,
        image: "http://dummyimage.com/4766x3733.png/dddddd/000000",
      },
      {
        name: "etiam vel augue vestibulum rutrum rutrum",
        description:
          "velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget",
        price: 20.72,
        discount: null,
        category: null,
        quantity: 92,
        image: "http://dummyimage.com/4110x4674.png/ff4444/ffffff",
      },
      {
        name: "justo etiam pretium iaculis justo in hac habitasse",
        description:
          "proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum",
        price: 41.24,
        discount: 1,
        category: null,
        quantity: 95,
        image: "http://dummyimage.com/4961x3943.png/5fa2dd/ffffff",
      },
      {
        name: "non lectus aliquam sit amet",
        description:
          "consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est",
        price: 78.8,
        discount: null,
        category: null,
        quantity: 88,
        image: "http://dummyimage.com/3749x3650.png/dddddd/000000",
      },
      {
        name: "quis libero nullam sit amet turpis elementum ligula",
        description:
          "rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce",
        price: 33.24,
        discount: null,
        category: null,
        quantity: 66,
        image: "http://dummyimage.com/3578x4472.png/ff4444/ffffff",
      },
      {
        name: "habitasse platea dictumst maecenas ut massa quis",
        description:
          "tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec",
        price: 49.01,
        discount: 19,
        category: null,
        quantity: 25,
        image: "http://dummyimage.com/4737x4772.png/ff4444/ffffff",
      },
      {
        name: "in tempus sit amet sem fusce",
        description:
          "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh",
        price: 13.0,
        discount: null,
        category: null,
        quantity: 11,
        image: "http://dummyimage.com/3704x4086.png/cc0000/ffffff",
      },
      {
        name: "lacus at velit vivamus vel nulla eget eros",
        description:
          "turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
        price: 77.01,
        discount: null,
        category: null,
        quantity: 31,
        image: "http://dummyimage.com/4776x4807.png/cc0000/ffffff",
      },
      {
        name: "vel augue vestibulum ante ipsum primis in faucibus",
        description:
          "elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit",
        price: 35.79,
        discount: 21,
        category: null,
        quantity: 9,
        image: "http://dummyimage.com/3758x4795.png/ff4444/ffffff",
      },
      {
        name: "arcu libero rutrum ac lobortis vel dapibus at",
        description:
          "tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
        price: 7.95,
        discount: 1,
        category: null,
        quantity: 20,
        image: "http://dummyimage.com/4558x4113.png/5fa2dd/ffffff",
      },
      {
        name: "ligula suspendisse ornare consequat",
        description:
          "donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin",
        price: 38.58,
        discount: 7,
        category: null,
        quantity: 32,
        image: "http://dummyimage.com/4147x4723.png/dddddd/000000",
      },
      {
        name: "adipiscing molestie hendrerit at vulputate vitae nisl",
        description:
          "accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus",
        price: 10.52,
        discount: null,
        category: null,
        quantity: 17,
        image: "http://dummyimage.com/4898x3866.png/5fa2dd/ffffff",
      },
      {
        name: "sed nisl nunc rhoncus",
        description:
          "congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo",
        price: 30.76,
        discount: 6,
        category: null,
        quantity: 22,
        image: "http://dummyimage.com/4055x3767.png/5fa2dd/ffffff",
      },
      {
        name: "ac diam cras pellentesque volutpat dui maecenas",
        description:
          "integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus",
        price: 72.83,
        discount: null,
        category: null,
        quantity: 3,
        image: "http://dummyimage.com/4356x4351.png/cc0000/ffffff",
      },
      {
        name: "risus semper porta volutpat quam pede lobortis",
        description:
          "consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula",
        price: 40.81,
        discount: null,
        category: null,
        quantity: 86,
        image: "http://dummyimage.com/3575x3633.png/5fa2dd/ffffff",
      },
      {
        name: "orci vehicula condimentum curabitur in",
        description:
          "lectus pellentesque eget nunc donec quis orci eget orci vehicula",
        price: 90.49,
        discount: null,
        category: null,
        quantity: 11,
        image: "http://dummyimage.com/4509x4186.png/ff4444/ffffff",
      },
      {
        name: "erat vestibulum sed magna at",
        description:
          "lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque",
        price: 88.01,
        discount: null,
        category: null,
        quantity: 83,
        image: "http://dummyimage.com/4241x3711.png/dddddd/000000",
      },
      {
        name: "et ultrices posuere cubilia curae",
        description:
          "suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean",
        price: 60.95,
        discount: 28,
        category: null,
        quantity: 31,
        image: "http://dummyimage.com/3882x4295.png/cc0000/ffffff",
      },
      {
        name: "vivamus vestibulum sagittis sapien",
        description:
          "congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat",
        price: 65.66,
        discount: null,
        category: null,
        quantity: 30,
        image: "http://dummyimage.com/4953x3671.png/dddddd/000000",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
