import { action, computed, makeAutoObservable, observable } from 'mobx';

import Swal from 'sweetalert2';

export default class EleicoesStore {
  constructor() {
    makeAutoObservable(this)
  }

  @observable candidateNumber = '';

  @observable candidates = {
    ['1']: {
      name: 'Mendigo',
      party: 'Uma mão na urna e a outra no talento',
      image: 'https://portaldobitcoin.com/wp-content/uploads/2022/04/givaldo-alves-grazi-mourao-diego-aguiar-instagram-3.png',
      votes: 0
    },
    ['2']: {
      name: 'Monark',
      party: 'Partido nazist#',
      image: 'https://jpimg.com.br/uploads/2022/04/whatsapp-image-2022-04-07-at-14.58.38.jpeg',
      votes: 0
    },
    ['3']: {
      name: 'Will Smith',
      party: 'Um maluco no pedaço',
      image: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportEntertainmentNews/tagreuters.com2022binary_LYNXNPEI2T1BD-FILEDIMAGE.jpg?w=876&h=484&crop=1',
      votes: 0
    },
    ['branco']: {
      name: 'Branco',
      party: 'Nenhum',
      image: 'https://cdn.mos.cms.futurecdn.net/uRfKogf9KpxZDLUJR4EnjK.jpeg',
      votes: 0
    },
    ['00000']: {
      name: 'Nulo',
      party: 'Nenhum',
      image: 'https://www.teclasap.com.br/wp-content/uploads/2014/03/voto-nulo.png',
      votes: 0
    }
  };

  @computed get getButtonsNumbers() {
    const keys = Array.from({ length: 9 }, (_, i) => i + 1);
    keys.push(0);
    return keys;
  }

  @computed get getCandidate() {
    return this.candidates[this.candidateNumber];
  }

  @computed get getCandidatesVotes() {
    return Object.values(this.candidates).sort((a, b) => (a.votes > b.votes ? -1 : 1))
  }

  @action handleCandidateNumber = (candidateNumber: string) => {
    if (this.candidateNumber === 'branco') {
      this.candidateNumber = '';
    }
    if (this.candidateNumber.length === 5) {
      Swal.fire("Número máximo é de 5 caracteres", '', 'warning');
      return;
    }
    this.playSound(500);
    this.candidateNumber += candidateNumber;
  };

  @action handleFix = () => {
    if (this.candidateNumber === 'branco') {
      this.candidateNumber = '';
    }
    if (this.candidateNumber.length > 0) {
      this.playSound(500);
      this.candidateNumber = this.candidateNumber.substring(0, this.candidateNumber.length - 1);
    }
  };

  @action vote = () => {
    if (this.candidates[this.candidateNumber]) {
      this.candidates[this.candidateNumber].votes = this.candidates[this.candidateNumber].votes + 1;
      Swal.fire("Voto computado com sucesso", "O Brasil agradece!", 'success');
      this.candidateNumber = '';
      this.playSound(2000);
    } else {
      Swal.fire("Número Inválido de candidato", '', 'warning');
    }
  };

  @action voteWhite = () => {
    this.playSound(500);
    this.candidateNumber = 'branco';
  };

  @action playSound = (timeout: number) => {
    const audio = new Audio('https://www.adautobulhoes.com.br/locutor/baixar-som-de-urna-eletronica-download-urna-eletronica-som-urna-eletronica-mp3-barulho-urna-eletronica-mp3-toque-urna-eletronica-mp3-efeito-urna-eletronica-mp3-barulho-urna-eletronica-mp3-download-jingle-politico-vereador-e-.mp3');
    audio.play();
    setTimeout(() => {
      audio.pause();
    }, timeout);
  };

}
const eleicoes = new EleicoesStore();
export { eleicoes };
