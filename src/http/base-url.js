const buildEnv = process.env.BUILD_ENV;

const getBaseUrl = () => {
  if (buildEnv === 'sit') {
    return ''; // 測試環境
  }

  return ''; // 生產環境
}

export {
  getBaseUrl
};
