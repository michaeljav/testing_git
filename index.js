//MODIFICADO DESDE EL MAIN BRANCH COMENTARIO
const data = [
  {
    identificador_unico: "AGRICULTURA-449291",
    puntaje_institucion_en_xroad: 0,
  },
  {
    identificador_unico: "AGRICULTURA-449292",
    puntaje_institucion_en_xroad: 1,
  },
  {
    identificador_unico: "AGRICULTURA-449293",
    puntaje_institucion_en_xroad: 2,
  },
];

// const data = 'undefined';
// console.log(data);

function getDifferentInstitutionPuntajXroad(data) {
  const objs = {};
  const instituWithDiff_puntaje_institucion_en_xroad = [];
  try {
    data?.forEach((obj) => {
      const siglaInst = obj?.identificador_unico?.split("-")[0]?.trim();
      //if institution does not exist, I insert it to object
      if (!objs.hasOwnProperty(siglaInst)) {
        objs[siglaInst] = obj?.puntaje_institucion_en_xroad;
      }
      //if institution does exist and if it exists check if the value is different
      else {
        if (objs[siglaInst] !== obj?.puntaje_institucion_en_xroad) {
          instituWithDiff_puntaje_institucion_en_xroad.push({
            rowcode: obj?.identificador_unico,
            columnName: "puntaje_institucion_en_xroad",
            puntaje_institucion_en_xroad: obj?.puntaje_institucion_en_xroad,
            error:
              "Una misma institucion no puede tener dos valores distintos en la columna puntaje_institucion_en_xroad",
          });
        }
      }
      // console.log(objs);
    });
    return instituWithDiff_puntaje_institucion_en_xroad;
  } catch (error) {
    return [
      {
        rowcode: "",
        columnName: "puntaje_institucion_en_xroad",
        puntaje_institucion_en_xroad: -1,
        error: `Validando que puntaje_institucion_en_xroad no sea repetido por institución y genero este error: ${error.message}`,
      },
    ];
  }
}

console.log(getDifferentInstitutionPuntajXroad(data));
