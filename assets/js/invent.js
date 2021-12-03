function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
    render() {
      return /*#__PURE__*/(
        React.createElement("div", { id: "main" }, /*#__PURE__*/
        React.createElement(Index, null)));
  
  
    }}
  
  
  class Index extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: true,
        input: '' };
  
  
      this.handleChange = this.handleChange.bind(this);
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        input: event.target.value });
  
  
    }
  
    toggleVisibility() {
      this.setState(state => {
        if (state.visibility === true) {
          return { visibility: false };
        } else {
          return { visibility: true };
        }
      });
    }
    render() {
      if (this.state.visibility) {
        return /*#__PURE__*/(
          React.createElement("div", { class: "login" }, /*#__PURE__*/
          React.createElement("img", { id: "logo", src: "https://res.cloudinary.com/face-studio/image/upload/v1636750007/Fit%20Game/idroplogo_devgmu.png" }), /*#__PURE__*/
          React.createElement("form", { method: "post" }, /*#__PURE__*/
          React.createElement("input", { type: "text", value: this.state.input, onChange: this.handleChange, name: "u", placeholder: "Username / ID", required: true }), /*#__PURE__*/
          React.createElement("button", { type: "submit", onClick: this.toggleVisibility, class: "btn btn-primary btn-block btn-large" }, "Login"))));
  
  
  
      } else {
        return /*#__PURE__*/(
          React.createElement("div", null, /*#__PURE__*/
          React.createElement(UserInterface, { dataFromParent: this.state.input, dataFromParent2: this.toggleVisibility })));
  
  
      }
    }}
  ;
  
  class UserInterface extends React.Component {
    render() {
      return /*#__PURE__*/(
        React.createElement("div", { id: "index" }, /*#__PURE__*/
        React.createElement("div", { id: "navbar" }, /*#__PURE__*/
        React.createElement("img", { id: "logo2", src: "https://res.cloudinary.com/face-studio/image/upload/v1636750007/Fit%20Game/idroplogo_devgmu.png" }), /*#__PURE__*/
        React.createElement("ul", null, /*#__PURE__*/
        React.createElement("div", { class: "dropdown" }, /*#__PURE__*/
        React.createElement("li", { id: "research" }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-search", viewBox: "0 0 16 16" }, /*#__PURE__*/
        React.createElement("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }))), /*#__PURE__*/
  
        React.createElement("div", { class: "dropdown-content" }, /*#__PURE__*/
        React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("input", { type: "text", name: "u", placeholder: "Procurar NFTs", required: true }), /*#__PURE__*/React.createElement("button", { id: "search" }, "Procurar")))), /*#__PURE__*/
  
  
        React.createElement("div", { class: "dropdown" }, /*#__PURE__*/
        React.createElement("li", { id: "info" }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-info-circle-fill", viewBox: "0 0 16 16" }, /*#__PURE__*/
        React.createElement("path", { d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" }))), /*#__PURE__*/
  
        React.createElement("div", { class: "dropdown-content" }, /*#__PURE__*/
        React.createElement("a", { href: "#" }, "Descubra, colete e venda NFTs extraordinários no nosso mercado de NFTs"))), /*#__PURE__*/
  
  
  
        React.createElement("div", { class: "dropdown" }, /*#__PURE__*/
        React.createElement("li", { id: "notify" }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-bell", viewBox: "0 0 16 16" }, /*#__PURE__*/React.createElement("path", { d: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" }))), /*#__PURE__*/
  
        React.createElement("div", { class: "dropdown-content" }, /*#__PURE__*/
        React.createElement("a", { href: "#" }, "Você tem 0 notificações"))), /*#__PURE__*/
  
  
  
        React.createElement("div", { class: "dropdown" }, /*#__PURE__*/
        React.createElement("li", { id: "user" }, /*#__PURE__*/React.createElement("img", { src: "https://res.cloudinary.com/face-studio/image/upload/v1631329313/I%20Fit/newuser48x48_fro3ni.jpg", id: "avatar" })), /*#__PURE__*/
        React.createElement("div", { class: "dropdown-content" }, /*#__PURE__*/
        React.createElement("a", { id: "username", href: "#" }, this.props.dataFromParent), /*#__PURE__*/
        React.createElement("a", { id: "logout", href: "index.html", onClick: this.props.dataFromParent2 }, "Logout"))))), /*#__PURE__*/
  
  
  
  
        React.createElement(Nft, null)));
  
  
    }}
  
  
  class Nft extends React.Component {
    render() {
      return /*#__PURE__*/(
        React.createElement("div", { class: "container" }, /*#__PURE__*/
        React.createElement("div", { class: "description" }, /*#__PURE__*/
        React.createElement("h1", null, "I Fit Delivery Box #7410"), /*#__PURE__*/
        React.createElement("h4", null, "I Fit NFTs"), /*#__PURE__*/
        React.createElement("p", null, "Parece uma simples entrega de comida do I Fit, mas não, pode sair muita coisa boa de dentro dessa caixa. Acesse", /*#__PURE__*/React.createElement("a", { href: "#" }, " www.fstudio.gg"), " para mais detalhes."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
        React.createElement("section", { id: "create" }, /*#__PURE__*/ /*#__PURE__*/React.createElement("br", null),/*#__PURE__*/React.createElement("br", null),/*#__PURE__*/React.createElement("br", null),/*#__PURE__*/React.createElement("br", null),/*#__PURE__*/React.createElement("br", null),/*#__PURE__*/React.createElement("br", null),
        React.createElement("h2", null, "CRIADOR"), /*#__PURE__*/
        React.createElement("img", { id: "creator", src: "https://res.cloudinary.com/face-studio/image/upload/v1620497253/I%20Fit/Favicon_pttyjh.png" }), /*#__PURE__*/ 
        React.createElement("span", null, "Face Studio", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", { href: "#" }, "@fstudio.gg")), /*#__PURE__*/
        React.createElement("hr", null)), /*#__PURE__*/
  
        React.createElement("div", { id: "buy" }, /*#__PURE__*/
        React.createElement("h2", null, "PREÇO: 8 ", /*#__PURE__*/React.createElement("img", { id: "eth", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png" }), " ETH"), /*#__PURE__*/
        React.createElement("input", { type: "text", id: "wallet", name: "u", placeholder: "O Endereço Da Sua Carteira. 0xA0c686D35AdA335AcC4F87596D9DaBef19cb3c39", required: true }), /*#__PURE__*/
        React.createElement("button", { id: "buy-btn" }, "Lances"))), /*#__PURE__*/
  
  
  
  
        React.createElement("div", { class: "nft" }, /*#__PURE__*/
        React.createElement("img", { class: "nft-img", src: "https://res.cloudinary.com/face-studio/image/upload/v1636777121/Fit%20Game/crate2_gvr03q.png" })), /*#__PURE__*/
  
        React.createElement("div", { class: "footer" }, /*#__PURE__*/
        React.createElement(FooterNav, null))));
  
  
  
    }}
  
  
  const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return /*#__PURE__*/(
      React.createElement("div", { className: showHideClassName }, /*#__PURE__*/
      React.createElement("section", { className: "modal-main" },
      children, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("button", { type: "button", id: "close-btn", onClick: handleClose }, "Fechar"))));
  
  
  
  
  
  };
  
  class FooterNav extends React.Component {
    constructor() {
      super();_defineProperty(this, "showModal",
  
  
  
  
  
  
  
      () => {
        this.setState({ show: true });
      });_defineProperty(this, "hideModal",
  
      () => {
        this.setState({ show: false });
      });this.state = { show: false };this.showModal = this.showModal.bind(this);this.hideModal = this.hideModal.bind(this);}
  
    render() {
      return /*#__PURE__*/(
        React.createElement("div", null, /*#__PURE__*/
        React.createElement("ul", null, /*#__PURE__*/
        React.createElement("button", { id: "market" }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-shop", viewBox: "0 0 16 16" }, /*#__PURE__*/
        React.createElement("path", { d: "M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" })), " Marketplace"), /*#__PURE__*/
  
        React.createElement("button", { id: "myprofile", onClick: this.showModal }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-person-lines-fill", viewBox: "0 0 16 16" }, /*#__PURE__*/
        React.createElement("path", { d: "M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" })), " Meu Perfil")), /*#__PURE__*/
  
  
  
        React.createElement(Modal, { show: this.state.show, handleClose: this.hideModal }, /*#__PURE__*/
        React.createElement("h1", null, "SALDO: 12 ", /*#__PURE__*/React.createElement("img", { id: "eth", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png" }), " ETH"), /*#__PURE__*/
        React.createElement("h2", null, "Carteira de NFTs:"), /*#__PURE__*/
        React.createElement("div", { id: "wallet-nft" }, /*#__PURE__*/
        React.createElement("img", { id: "nft-collection", src: "#" }), /*#__PURE__*/
        React.createElement("p", { id: "img-description" }, "#3749")), /*#__PURE__*/
  
        React.createElement("div", { id: "wallet-nft" }, /*#__PURE__*/
        React.createElement("img", { id: "nft-collection", src: "#" }), /*#__PURE__*/
        React.createElement("p", { id: "img-description" }, "#1957")), /*#__PURE__*/
  
        React.createElement("div", { id: "wallet-nft" }, /*#__PURE__*/
        React.createElement("img", { id: "nft-collection", src: "#" }), /*#__PURE__*/
        React.createElement("p", { id: "img-description" }, "#3559")), /*#__PURE__*/
  
        React.createElement("div", { id: "wallet-nft" }, /*#__PURE__*/
        React.createElement("img", { id: "nft-collection", src: "#" }), /*#__PURE__*/
        React.createElement("p", { id: "img-description" }, "#1649")))));
  
  
  
  
  
    }}
  
  
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));