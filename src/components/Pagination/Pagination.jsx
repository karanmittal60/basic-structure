import React from 'react';
import PropTypes from 'prop-types';
import "./Pagination.css"

function Page(props){
  const disableClass = props.isDisabled ? 'disabled':''
  const activeClass = props.isActive ? 'active':''
  return (
      <li className={`page-item  ${activeClass} ${disableClass}`} style={{zIndex:"0"}} onClick={() => { !props.isDisabled && props.onClick(props.pageNumber) }}>
        <a  style={props.isActive ? activeBg : null} >
          {props.text}
        </a>
      </li>
  )
}

let activeBg = {
  backgroundColor: "#005090"
}


function Pagination(props){
  let pages = [];

  var startPage, endPage;

  if (props.pages <= props.displayCount) {
    // less than props.displayCount total pages so show all
    startPage = 0;
    endPage = props.pages;
  } else {
    // more than 10 total pages so calculate start and end pages
    if (props.activePage <= 2) {
      startPage = 0;
      endPage = props.displayCount;
    } else if (props.activePage + 2 >= props.pages) {
      startPage = props.pages - 5;
      endPage = props.pages;
    } else {
      startPage = props.activePage - 2;
      endPage = props.activePage + 3;
    }
  }

  for(var i = startPage; i < endPage; i++){
    pages.push(<Page key={i} pageNumber={`${i}`} text={i+1} isActive={parseInt(props.activePage,10) === i} onClick={props.onPageChange}/>)
  }

  let size = "";
  switch(props.size){
    case 'sm': size = 'pagination-sm'; break;
    case 'lg': size = 'pagination-lg'; break;
    default: size = ""
  }

  return (
      <ul className={`pagination ${size}`} style={{margin: '0px auto'}}>
        {(props.hasFirst && props.pages > 2) &&
        <Page pageNumber={`0`} text={"«"} isActive={false} isDisabled={props.activePage <= 2} onClick={props.onPageChange}/>
        }
        {(props.hasPrevious && props.pages > 1) &&
        <Page pageNumber={`${props.activePage - 1}`} text={"‹"} isActive={false} isDisabled={props.activePage < 1} onClick={props.onPageChange}/>
        }

        { pages }

        {(props.hasNext && props.pages > 1) &&
        <Page pageNumber={`${props.activePage + 1}`} text={"›"} isActive={false} isDisabled={props.activePage > props.pages-2} onClick={props.onPageChange} />
        }
        {(props.hasLast && props.pages > 2) &&
        <Page pageNumber={`${props.pages-1}`} text={"»"} isActive={false} isDisabled={props.activePage >= props.pages-2} onClick={props.onPageChange} />
        }

      </ul>
  )
}

Pagination.propTypes = {
  hasFirst: PropTypes.bool,
  hasLast: PropTypes.bool,
  hasNext: PropTypes.bool,
  hasPrevious: PropTypes.bool,
  activePage: PropTypes.number,
  displayCount: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'lg', '']),
  onPageChange: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
  class: PropTypes.string,
}

Pagination.defaultProps = {
  hasFirst: true,
  hasLast: true,
  hasNext: true,
  hasPrevious: true,
  activePage: 0,
  displayCount: 5,
  size: "",
  class: ""
}

export default Pagination
