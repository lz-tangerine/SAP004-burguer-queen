import React from 'react'
// import ReactDOM from 'react-dom'
// const modal = document.getElementById('modal')

// class Modal extends React.Component {
//   constructor(props) {
//     super(props)
//     this.el = document.createElement('div')
//   }

//   componentDidMount() {
//     modal.appendChild(this.el)
//   }

//   componentWillUnmount() {
//     modal.removeChild(this.el)
//   }

//   render() {
//     return ReactDOM.createPortal(this.props.children, this.el)
//   }
// }
// export default Modal

const Modal = (props) => {
  const { className, modalRef } = props

  return (
    <div ref={modalRef} className={`${className} modal`}>
      <p>Meu modal!</p>
    </div>
  )
}

export default Modal
