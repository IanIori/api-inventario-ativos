const validAssetTypes = [
    'notebook',
    'monitor1',
    'monitor2',
    'teclado',
    'mouse',
    'nobreak',
    'desktop',
    'headset',
    'celular',
    'acessorios'
  ];
  
  export const validateAssetType = (type) => {
    return validAssetTypes.includes(type);
  };
  