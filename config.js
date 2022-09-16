const config = {
  mongodb: {
    cnxStr: "mongodb://localhost/coderfinal",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    type: "service_account",
    project_id: "coder-segunda",
    private_key_id: "a695143737e91af689851dc0fb4948ee3f89c9ac",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQDXY+nWRPZbIdps\nwwjhuacG4UK9rVPORnCF4k6s4Qq0VthDhPJ7XNZsKbHgJcdbhPU5dyj+JHM/Qf6M\n+JyhQjp30a1aen0udqq68kVheY7d0LLbKX0WOmBS7XoNuA/nOmynBG3QZYtwwVKZ\nIN/2YG9RKxrdMCXistmtY/Az5BwnculmM+GRdDLbEqtY/BJgzUHW5yN6RZH5H33A\nzEwu3hm6gsVRG0rGnV+CPQJcxQ5vvoJqe/kABLhy+c0+bv30N2oZ/afqffISt7jg\nycd92DL5Jc63P7A7KbDBB8nI1kZtKsEuyIogI5hYM4SXMZS/chOHDAxZ4to9eh/4\nUYmKBm0FAgMBAAECggEAaai8q/y2cSwhLxtZvwlIk0praAqfwt+xESxb9diLXL4B\nZtXP8Y4wLW0isdc2fYGynhcDR/BvjId+LH9ErqKDdgWoqWrO/7z8sappOJDd8ZgQ\nNQycLQxD9kpChnpVatOxOxkkGYfGqHBdaXrEAuN5l/KyQfD9lMCxoaoVyg7LdNm2\nHR/EGxV7aa4aAuCGE+4duSDUlBKRdk82fLfX2joqNoW+ODntH4LHrvbM2yd6DsbO\nKGf6emCSk34RLUxZOq54ywclu8UpkkzIr/SJVpuh/c2nCS2y8Os1MxUHijOrYduh\nrb/sTxHII1fLK92GP71jLAOWOyBE8IDmYId7WuC2/QKBgQD6zDA7/6jCgVFfWb+V\nDk9SXVmoCnxuhtkmgtsdSuOGCOBdFCpOJsuAQI2ply8CrKXVzL/+iVo+QqQGZ3ls\neew7Y6g+/7SOuhkTgosMtONkuhPxxberBAkdX2XpoHpM9IixAmnLExI0Y4ly+CIF\nFJ4gzHaBBE8jVGz5sQo7OPO6fwKBgQDb27OLvzfuAx9RSuND7gnCWNQfpA+lWLVa\nf9UqQWxvbN3wprAUCCSQxKGgyfJ4S3JUUEkrfQkuQwbh+XNQhh75/FoiPSft24b/\nBlcucf5RCrdlx5nG2EWQAsCVanMqdHXbUgOWFv85sgwMapJV2rhHF8Ke1G4rNe08\nLlb8YBcuewJ/HWPQQzeyjxiYcJQT32PN59kIqKiR7GHhEKJFCym7f/mKUV4Llxz0\nvBLUhwswdx/ET0mvNiTibmlgz19Q22VuSYdkL/3HKvKj/aVOpi6Md0FXFP4Wh/Px\nHYAQcVBdBKejXRrrSuDxQTJo6RAq7G1+GlnbiUL4AyvhmWEl0craxQKBgHj9xSco\nyjy/lyKDleIyQ0ii3cmz3bBeyx7MrqCcdHI1dUYUVV4QxR6uN0xnFnrA+mAP9tRp\n8P12gXkmcCFmTfHAwFGLWkf5wabi9GNo9E3hGeB3Iddd+ZoxCY6wkERS5vEVh0e3\nzCkSJLNIitOYlET7fG0v9pjtCmtODSzCLL+1AoGBAOOGpvimVDus78YWSKmv5S+A\na+ACVC5oVggVrRixFJrvxPOK3LmlAhW4z+uSxmqAc/90E+tHfiQq3mrUDruaU8+8\nNGQ++YSI2sQSk2o08tHhGCweYPlzdr22BSf4bUAUeHm/jL33DNanX62wYJot2ZqN\nALPttWzcQm3II8//b/qb\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-jeycb@coder-segunda.iam.gserviceaccount.com",
    client_id: "114765881187855857355",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jeycb%40coder-segunda.iam.gserviceaccount.com",
  },
};

module.exports = config;
