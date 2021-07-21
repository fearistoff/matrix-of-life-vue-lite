const mainTailList = {
  "t18_6_6": {},
  "t9_9_18": {},
  "t18_3_12": {},
  "t15_20_5": {},
  "t15_5_8": {},
  "t9_15_6": {},
  "t6_17_11": {},
  "t12_19_7": {},
  "t9_12_3": {},
  "t21_4_10": {},
  "t21_10_16": {},
  "t4_16_12": {},
  "t6_8_20": {},
  "t3_7_22": {},
  "t18_6_15": {},
  "t14_20_6": {},
  "t21_10_7": {},
  "t3_13_10": {},
  "t9_3_21": {},
  "t6_5_17": {},
  "t21_7_13": {},
  "t15_8_11": {},
  "t14_5_19": {},
  "t9_4_22": {},
  "t18_8_8": {},
  "t18_7_7": {},
  "t18_10_10": {},
  "t18_11_11": {},
  "t18_5_5": {},
  "t9_11_20": {},
  "t5_11_16": {},
  "t21_6_15": {},
  "t18_6_12": {},
  "t15_22": {},
  "t22_7": {},
  "t7_15": {},
  "t3_22_19": {}
}
new Vue({
  el: '#app',
  data: {
    date: "2020-06-12",
    mainMenuHidden: false,
    showResults: false,
    currentMatrix: undefined,
    tailsList: [],
    energiesList: []
  },
  methods: {
    calculate: function () {
      if (this.date) {
        this.engageMatrix(this.name, this.date);
      } else {
        alert('Введена неверная дата!');
      }
    },
    engageMatrix: function (name, date) {
      this.currentMatrix = this.createMatrix(date, name);
      this.showResults = true;
      this.mainMenuHidden = true;
    },
    splitAndAdd: function (inNumber) {
      let newNumber;
      if (inNumber <= 22) {
        return inNumber;
      } else if (inNumber > 999) {
        newNumber = Math.floor(inNumber / 1000) + Math.floor((inNumber / 100) % 10) + Math.floor((inNumber / 10) % 10) + Math.floor(inNumber % 10);
      } else if (inNumber > 99) {
        newNumber = Math.floor((inNumber / 100) % 10) + Math.floor((inNumber / 10) % 10) + Math.floor(inNumber % 10);
      } else {
        newNumber = Math.floor((inNumber / 10) % 10) + Math.floor(inNumber % 10);
      }
      return this.splitAndAdd(newNumber);
    },
    createMatrix: function (date, name) {
      let data = {
        name: name,
        date: date,
        u00: this.matrixElement(parseInt(date.split('-')[2]), 'u00'),
        u16: this.matrixElement(parseInt(date.split('-')[1]), 'u16'),
        u32: this.matrixElement(parseInt(date.split('-')[0]), 'u32')
      }
      data.u48 = this.matrixElement(data.u00.arcane + data.u16.arcane + data.u32.arcane, 'u48');

      data.u08 = this.matrixElement(data.u00.arcane + data.u16.arcane, 'u08');
      data.u24 = this.matrixElement(data.u16.arcane + data.u32.arcane, 'u24');
      data.u40 = this.matrixElement(data.u32.arcane + data.u48.arcane, 'u40');
      data.u56 = this.matrixElement(data.u48.arcane + data.u00.arcane, 'u56');


      data.u04 = this.matrixElement(data.u00.arcane + data.u08.arcane, 'u04');
      data.u02 = this.matrixElement(data.u00.arcane + data.u04.arcane, 'u02');
      data.u01 = this.matrixElement(data.u00.arcane + data.u02.arcane, 'u01');
      data.u03 = this.matrixElement(data.u02.arcane + data.u04.arcane, 'u03');
      data.u06 = this.matrixElement(data.u04.arcane + data.u08.arcane, 'u06');
      data.u05 = this.matrixElement(data.u04.arcane + data.u06.arcane, 'u05');
      data.u07 = this.matrixElement(data.u06.arcane + data.u08.arcane, 'u07');

      data.u12 = this.matrixElement(data.u08.arcane + data.u16.arcane, 'u12');
      data.u14 = this.matrixElement(data.u12.arcane + data.u16.arcane, 'u14');
      data.u15 = this.matrixElement(data.u14.arcane + data.u16.arcane, 'u15');
      data.u10 = this.matrixElement(data.u08.arcane + data.u12.arcane, 'u10');
      data.u09 = this.matrixElement(data.u08.arcane + data.u10.arcane, 'u09');
      data.u11 = this.matrixElement(data.u12.arcane + data.u10.arcane, 'u11');
      data.u13 = this.matrixElement(data.u12.arcane + data.u14.arcane, 'u13');

      data.u20 = this.matrixElement(data.u16.arcane + data.u24.arcane, 'u20');
      data.u18 = this.matrixElement(data.u20.arcane + data.u16.arcane, 'u18');
      data.u17 = this.matrixElement(data.u18.arcane + data.u16.arcane, 'u17');
      data.u19 = this.matrixElement(data.u18.arcane + data.u20.arcane, 'u19');
      data.u22 = this.matrixElement(data.u20.arcane + data.u24.arcane, 'u22');
      data.u21 = this.matrixElement(data.u20.arcane + data.u22.arcane, 'u21');
      data.u23 = this.matrixElement(data.u22.arcane + data.u24.arcane, 'u23');

      data.u28 = this.matrixElement(data.u32.arcane + data.u24.arcane, 'u28');
      data.u26 = this.matrixElement(data.u28.arcane + data.u24.arcane, 'u26');
      data.u25 = this.matrixElement(data.u26.arcane + data.u24.arcane, 'u25');
      data.u27 = this.matrixElement(data.u26.arcane + data.u28.arcane, 'u27');
      data.u30 = this.matrixElement(data.u28.arcane + data.u32.arcane, 'u30');
      data.u29 = this.matrixElement(data.u30.arcane + data.u28.arcane, 'u29');
      data.u31 = this.matrixElement(data.u30.arcane + data.u32.arcane, 'u31');

      data.u36 = this.matrixElement(data.u32.arcane + data.u40.arcane, 'u36');
      data.u34 = this.matrixElement(data.u32.arcane + data.u36.arcane, 'u34');
      data.u33 = this.matrixElement(data.u32.arcane + data.u34.arcane, 'u33');
      data.u35 = this.matrixElement(data.u34.arcane + data.u36.arcane, 'u35');
      data.u38 = this.matrixElement(data.u36.arcane + data.u40.arcane, 'u38');
      data.u37 = this.matrixElement(data.u38.arcane + data.u36.arcane, 'u37');
      data.u39 = this.matrixElement(data.u38.arcane + data.u40.arcane, 'u39');

      data.u44 = this.matrixElement(data.u40.arcane + data.u48.arcane, 'u44');
      data.u42 = this.matrixElement(data.u40.arcane + data.u44.arcane, 'u42');
      data.u41 = this.matrixElement(data.u42.arcane + data.u40.arcane, 'u41');
      data.u43 = this.matrixElement(data.u42.arcane + data.u44.arcane, 'u43');
      data.u46 = this.matrixElement(data.u44.arcane + data.u48.arcane, 'u46');
      data.u45 = this.matrixElement(data.u46.arcane + data.u44.arcane, 'u45');
      data.u47 = this.matrixElement(data.u46.arcane + data.u48.arcane, 'u47');

      data.u52 = this.matrixElement(data.u48.arcane + data.u56.arcane, 'u52');
      data.u50 = this.matrixElement(data.u52.arcane + data.u48.arcane, 'u50');
      data.u49 = this.matrixElement(data.u50.arcane + data.u48.arcane, 'u49');
      data.u51 = this.matrixElement(data.u52.arcane + data.u50.arcane, 'u51');
      data.u54 = this.matrixElement(data.u52.arcane + data.u56.arcane, 'u54');
      data.u53 = this.matrixElement(data.u54.arcane + data.u52.arcane, 'u53');
      data.u55 = this.matrixElement(data.u54.arcane + data.u56.arcane, 'u55');

      data.u60 = this.matrixElement(data.u56.arcane + data.u00.arcane, 'u60');
      data.u58 = this.matrixElement(data.u60.arcane + data.u56.arcane, 'u58');
      data.u57 = this.matrixElement(data.u58.arcane + data.u56.arcane, 'u57');
      data.u59 = this.matrixElement(data.u60.arcane + data.u58.arcane, 'u59');
      data.u62 = this.matrixElement(data.u60.arcane + data.u00.arcane, 'u62');
      data.u61 = this.matrixElement(data.u62.arcane + data.u60.arcane, 'u61');
      data.u63 = this.matrixElement(data.u62.arcane + data.u00.arcane, 'u63');

      data.c00 = this.matrixElement(data.u00.arcane + data.u16.arcane + data.u32.arcane + data.u48.arcane, 'c00');

      data.c02 = this.matrixElement(data.c00.arcane + data.u00.arcane, 'c02');
      data.c01 = this.matrixElement(data.c02.arcane + data.c00.arcane, 'c01');
      data.c03 = this.matrixElement(data.u00.arcane + data.c02.arcane, 'c03');

      data.c11 = this.matrixElement(data.c00.arcane + data.u08.arcane, 'c11');
      data.c12 = this.matrixElement(data.c11.arcane + data.u08.arcane, 'c12');

      data.c22 = this.matrixElement(data.c00.arcane + data.u16.arcane, 'c22');
      data.c21 = this.matrixElement(data.c00.arcane + data.c22.arcane, 'c21');
      data.c23 = this.matrixElement(data.c22.arcane + data.u16.arcane, 'c23');

      data.c31 = this.matrixElement(data.c00.arcane + data.u24.arcane, 'c31');
      data.c32 = this.matrixElement(data.c31.arcane + data.u24.arcane, 'c32');

      data.c41 = this.matrixElement(data.c00.arcane + data.u32.arcane, 'c41');
      data.c42 = this.matrixElement(data.c41.arcane + data.u32.arcane, 'c42');

      data.c52 = this.matrixElement(data.c00.arcane + data.u40.arcane, 'c52');
      data.c53 = this.matrixElement(data.c52.arcane + data.u40.arcane, 'c53');

      data.c61 = this.matrixElement(data.c00.arcane + data.u48.arcane, 'c61');
      data.c62 = this.matrixElement(data.u48.arcane + data.c61.arcane, 'c62');

      data.c71 = this.matrixElement(data.c00.arcane + data.u56.arcane, 'c71');
      data.c72 = this.matrixElement(data.u56.arcane + data.c71.arcane, 'c72');

      data.c51 = this.matrixElement(data.c41.arcane + data.c61.arcane, 'c51');
      data.s01 = this.matrixElement(data.c41.arcane + data.c51.arcane, 's01');
      data.s02 = this.matrixElement(data.c61.arcane + data.c51.arcane, 's02');


      data.b01 = this.matrixElement(data.u16.arcane + data.u48.arcane, 'b01', false);
      data.b02 = this.matrixElement(data.u00.arcane + data.u32.arcane, 'b02', false);
      data.b03 = this.matrixElement(data.b01.arcane + data.b02.arcane, 'b03', false);

      data.b04 = this.matrixElement(data.u08.arcane + data.u40.arcane, 'b04', false);
      data.b05 = this.matrixElement(data.u56.arcane + data.u24.arcane, 'b05', false);
      data.b06 = this.matrixElement(data.b04.arcane + data.b05.arcane, 'b06', false);

      data.b07 = this.matrixElement(data.b06.arcane + data.b03.arcane, 'b07', false);

      data.u00.neighborPairList = [
        [data.u01, data.u02],
        [data.u01],
        [data.c03, data.c02],
        [data.c03],
        [data.u63, data.u62],
        [data.u63]
      ];

      data.u00.neighborPairList = [
        [data.u01, data.u02],
        [data.u01],
        [data.c03, data.c02],
        [data.c03],
        [data.u63, data.u62],
        [data.u63]
      ];
      data.u08.neighborPairList = [
        [data.u07, data.u06],
        [data.u07],
        [data.c12, data.c11],
        [data.c12],
        [data.u09, data.u10],
        [data.u09]
      ];
      data.u16.neighborPairList = [
        [data.u15, data.u14],
        [data.u15],
        [data.c23, data.c22],
        [data.c23],
        [data.u17, data.u18],
        [data.u17]
      ];
      data.u24.neighborPairList = [
        [data.u23, data.u22],
        [data.u23],
        [data.c32, data.c31],
        [data.c32],
        [data.u25, data.u26],
        [data.u25]
      ];
      data.u32.neighborPairList = [
        [data.u31, data.u30],
        [data.u31],
        [data.c42, data.c41],
        [data.c42],
        [data.u33, data.u34],
        [data.u33]
      ];
      data.u40.neighborPairList = [
        [data.u39, data.u38],
        [data.u39],
        [data.c53, data.c52],
        [data.c53],
        [data.u41, data.u42],
        [data.u41]
      ];
      data.u48.neighborPairList = [
        [data.u47, data.u46],
        [data.u47],
        [data.c62, data.c61],
        [data.c62],
        [data.u49, data.u50],
        [data.u49]
      ];
      data.u56.neighborPairList = [
        [data.u55, data.u54],
        [data.u55],
        [data.c72, data.c71],
        [data.c72],
        [data.u57, data.u58],
        [data.u57]
      ];

      data.c00.neighborPairList = [
        [data.c01, data.c02],
        [data.c01],
        [data.c11, data.c12],
        [data.c11],
        [data.c21, data.c22],
        [data.c21],
        [data.c31, data.c32],
        [data.c31],
        [data.c41, data.c42],
        [data.c41],
        [data.c51, data.c52],
        [data.c51],
        [data.c61, data.c62],
        [data.c61],
        [data.c71, data.c72],
        [data.c71]
      ];

      data.c01.neighborPairList = [
        [data.c02, data.c03],
        [data.c02],
        [data.c00, data.c41],
        [data.c00]
      ];
      data.c02.neighborPairList = [
        [data.c03, data.u00],
        [data.c03],
        [data.c01, data.c00],
        [data.c01]
      ];
      data.c03.neighborPairList = [
        [data.u00],
        [data.c02, data.c01],
        [data.c02]
      ];

      data.c11.neighborPairList = [
        [data.c12, data.u08],
        [data.c12],
        [data.c00, data.c51],
        [data.c00]
      ];
      data.c12.neighborPairList = [
        [data.u08],
        [data.c11, data.u08],
        [data.c11]
      ];

      data.c21.neighborPairList = [
        [data.c22, data.c23],
        [data.c22],
        [data.c00, data.c61],
        [data.c00]
      ];
      data.c22.neighborPairList = [
        [data.c23, data.u16],
        [data.c23],
        [data.c21, data.c00],
        [data.c21]
      ];
      data.c23.neighborPairList = [
        [data.u16],
        [data.c22, data.c21],
        [data.c22]
      ];

      data.c31.neighborPairList = [
        [data.c32, data.u24],
        [data.c32],
        [data.c00, data.c71],
        [data.c00]
      ];
      data.c32.neighborPairList = [
        [data.u24],
        [data.c31, data.c00],
        [data.c31]
      ];

      data.c41.neighborPairList = [
        [data.c42, data.u32],
        [data.c42],
        [data.c00, data.c01],
        [data.c00],
        [data.s01, data.c51],
        [data.s01]
      ];
      data.c42.neighborPairList = [
        [data.u32],
        [data.c41, data.c00],
        [data.c41]
      ];

      data.c51.neighborPairList = [
        [data.s02, data.c61],
        [data.s02],
        [data.s01, data.c41],
        [data.s01],
        [data.c52, data.c53],
        [data.c52],
        [data.c00, data.c11],
        [data.c00]
      ];
      data.c52.neighborPairList = [
        [data.c53, data.u40],
        [data.c53],
        [data.c51, data.c00],
        [data.c51]
      ];
      data.c53.neighborPairList = [
        [data.u40],
        [data.c52, data.c51],
        [data.c53]
      ];

      data.c61.neighborPairList = [
        [data.c62, data.u48],
        [data.c62],
        [data.c00, data.c21],
        [data.c00],
        [data.s02, data.c51],
        [data.s02]
      ];
      data.c62.neighborPairList = [
        [data.u48],
        [data.c61, data.c00],
        [data.c61]
      ];

      data.c71.neighborPairList = [
        [data.c72, data.u56],
        [data.c72],
        [data.c00, data.c31],
        [data.c00]
      ];
      data.c72.neighborPairList = [
        [data.u56],
        [data.c71, data.c00],
        [data.c71]
      ];

      data.s01.neighborPairList = [
        [data.c51, data.s02],
        [data.c51],
        [data.c41]
      ];
      data.s02.neighborPairList = [
        [data.c51, data.s01],
        [data.c51],
        [data.c61]
      ];

      data.u01.neighborPairList = [
        [data.u00],
        [data.u02, data.u03],
        [data.u02]
      ];
      data.u02.neighborPairList = [
        [data.u01, data.u00],
        [data.u01],
        [data.u03, data.u04],
        [data.u03]
      ];
      data.u03.neighborPairList = [
        [data.u02, data.u01],
        [data.u02],
        [data.u04]
      ];
      data.u04.neighborPairList = [
        [data.u03, data.u02],
        [data.u03],
        [data.u05, data.u06],
        [data.u05]
      ];
      data.u05.neighborPairList = [
        [data.u04],
        [data.u06, data.u07],
        [data.u06]
      ];
      data.u06.neighborPairList = [
        [data.u05, data.u04],
        [data.u05],
        [data.u07, data.u08],
        [data.u07]
      ];
      data.u07.neighborPairList = [
        [data.u06, data.u05],
        [data.u06],
        [data.u08]
      ];

      data.u09.neighborPairList = [
        [data.u08],
        [data.u09, data.u10],
        [data.u09]
      ];
      data.u10.neighborPairList = [
        [data.u09, data.u08],
        [data.u09],
        [data.u11, data.u12],
        [data.u11]
      ];
      data.u11.neighborPairList = [
        [data.u10, data.u09],
        [data.u10],
        [data.u12]
      ];
      data.u12.neighborPairList = [
        [data.u11, data.u10],
        [data.u11],
        [data.u13, data.u14],
        [data.u13]
      ];
      data.u13.neighborPairList = [
        [data.u12],
        [data.u14, data.u15],
        [data.u14]
      ];
      data.u14.neighborPairList = [
        [data.u13, data.u12],
        [data.u13],
        [data.u15, data.u16],
        [data.u15]
      ];
      data.u15.neighborPairList = [
        [data.u14, data.u13],
        [data.u14],
        [data.u16]
      ];

      data.u17.neighborPairList = [
        [data.u16],
        [data.u18, data.u19],
        [data.u18]
      ];
      data.u18.neighborPairList = [
        [data.u17, data.u16],
        [data.u17],
        [data.u19, data.u20],
        [data.u19]
      ];
      data.u19.neighborPairList = [
        [data.u18, data.u17],
        [data.u18],
        [data.u20]
      ];
      data.u20.neighborPairList = [
        [data.u19, data.u18],
        [data.u19],
        [data.u21, data.u22],
        [data.u21]
      ];
      data.u21.neighborPairList = [
        [data.u20],
        [data.u22, data.u23],
        [data.u22]
      ];
      data.u22.neighborPairList = [
        [data.u21, data.u20],
        [data.u21],
        [data.u23, data.u24],
        [data.u23]
      ];
      data.u23.neighborPairList = [
        [data.u22, data.u21],
        [data.u22],
        [data.u24]
      ];

      data.u25.neighborPairList = [
        [data.u24],
        [data.u26, data.u27],
        [data.u26]
      ];
      data.u26.neighborPairList = [
        [data.u25, data.u24],
        [data.u25],
        [data.u27, data.u28],
        [data.u27]
      ];
      data.u27.neighborPairList = [
        [data.u26, data.u25],
        [data.u26],
        [data.u28]
      ];
      data.u28.neighborPairList = [
        [data.u27, data.u26],
        [data.u27],
        [data.u29, data.u30],
        [data.u29]
      ];
      data.u29.neighborPairList = [
        [data.u28],
        [data.u30, data.u31],
        [data.u30]
      ];
      data.u30.neighborPairList = [
        [data.u29, data.u28],
        [data.u29],
        [data.u31, data.u32],
        [data.u31]
      ];
      data.u31.neighborPairList = [
        [data.u30, data.u29],
        [data.u30],
        [data.u32]
      ];

      data.u33.neighborPairList = [
        [data.u32],
        [data.u34, data.u35],
        [data.u34]
      ];
      data.u34.neighborPairList = [
        [data.u33, data.u32],
        [data.u33],
        [data.u35, data.u36],
        [data.u35]
      ];
      data.u35.neighborPairList = [
        [data.u34, data.u33],
        [data.u34],
        [data.u36]
      ];
      data.u36.neighborPairList = [
        [data.u35, data.u34],
        [data.u35],
        [data.u37, data.u38],
        [data.u37]
      ];
      data.u37.neighborPairList = [
        [data.u36],
        [data.u38, data.u39],
        [data.u38]
      ];
      data.u38.neighborPairList = [
        [data.u37, data.u36],
        [data.u37],
        [data.u39, data.u40],
        [data.u39]
      ];
      data.u39.neighborPairList = [
        [data.u38, data.u37],
        [data.u38],
        [data.u40]
      ];

      data.u41.neighborPairList = [
        [data.u40],
        [data.u42, data.u43],
        [data.u42]
      ];
      data.u42.neighborPairList = [
        [data.u41, data.u40],
        [data.u41],
        [data.u43, data.u44],
        [data.u43]
      ];
      data.u43.neighborPairList = [
        [data.u42, data.u41],
        [data.u42],
        [data.u44]
      ];
      data.u44.neighborPairList = [
        [data.u43, data.u42],
        [data.u43],
        [data.u45, data.u46],
        [data.u45]
      ];
      data.u45.neighborPairList = [
        [data.u44],
        [data.u46, data.u47],
        [data.u46]
      ];
      data.u46.neighborPairList = [
        [data.u45, data.u44],
        [data.u45],
        [data.u47, data.u48],
        [data.u47]
      ];
      data.u47.neighborPairList = [
        [data.u46, data.u45],
        [data.u46],
        [data.u48]
      ];

      data.u49.neighborPairList = [
        [data.u48],
        [data.u50, data.u51],
        [data.u50]
      ];
      data.u50.neighborPairList = [
        [data.u49, data.u48],
        [data.u49],
        [data.u51, data.u52],
        [data.u51]
      ];
      data.u51.neighborPairList = [
        [data.u50, data.u49],
        [data.u50],
        [data.u52]
      ];
      data.u52.neighborPairList = [
        [data.u51, data.u50],
        [data.u51],
        [data.u53, data.u54],
        [data.u53]
      ];
      data.u53.neighborPairList = [
        [data.u52],
        [data.u54, data.u55],
        [data.u54]
      ];
      data.u54.neighborPairList = [
        [data.u53, data.u52],
        [data.u53],
        [data.u55, data.u56],
        [data.u55]
      ];
      data.u55.neighborPairList = [
        [data.u54, data.u53],
        [data.u54],
        [data.u56]
      ];

      data.u57.neighborPairList = [
        [data.u56],
        [data.u58, data.u59],
        [data.u58]
      ];
      data.u58.neighborPairList = [
        [data.u57, data.u56],
        [data.u57],
        [data.u59, data.u60],
        [data.u59]
      ];
      data.u59.neighborPairList = [
        [data.u58, data.u57],
        [data.u58],
        [data.u60]
      ];
      data.u60.neighborPairList = [
        [data.u59, data.u58],
        [data.u59],
        [data.u61, data.u62],
        [data.u61]
      ];
      data.u61.neighborPairList = [
        [data.u60],
        [data.u62, data.u63],
        [data.u62]
      ];
      data.u62.neighborPairList = [
        [data.u61, data.u60],
        [data.u61],
        [data.u63, data.u00],
        [data.u63]
      ];
      data.u63.neighborPairList = [
        [data.u62, data.u61],
        [data.u62],
        [data.u00]
      ];

      data.tailsList = {};
      for (let item in data) {
        if (data[item] && data[item].pairElement) {
          data[item].neighborPairList.forEach((item2) => {
            const tag = `t${data[item].arcane}_${item2[0].arcane}${item2[1] ? `_${item2[1].arcane}` : ''}`;
            if (mainTailList[tag]) {
              data.tailsList[`${item}_${item2[1] ? item2[1].id : item2[0].id}`] = {
                name: mainTailList[tag].name,
                description: mainTailList[tag].description,
                energy: tag.slice(1, 10).split('_').join('-'),
                tag: `${item}_${item2[1] ? item2[1].id : item2[0].id}`

              };
            }
          });
        }
      }
      return data;
    },
    matrixElement: function (number, id, nonPairFalse = true) {
      return {
        id: id,
        arcane: this.splitAndAdd(number),
        neighborPairList: [],
        pairElement: nonPairFalse
      }
    }
  }
});
