const DEFAULT_PROPERTIES = {
  get birthdate() {
    return new Date();
  },
  nickname: 'unnamed'
};

class Dragon {
  constructor({ birthdate, nickname } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
  }
}

module.exports = Dragon;