export const SET_DESIGNS = 'SET_DESIGNS';
export const SET_CURRENT_DESIGN = 'SET_CURRENT_DESIGN';

export function setDesigns (designs) {
  return { type: SET_DESIGNS, payload: { designs } };
}

export function setCurrentDesign (design) {
  return { type: SET_CURRENT_DESIGN, payload: { design } };
}