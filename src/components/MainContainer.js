import "bootstrap/dist/css/bootstrap.min.css";
import "./MainContainer.css";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { showModal, editCard } from "../utils/cardSlice";
import AddCardModal from "./AddCardModal";
import ListContainer from "./ListContainer";

const MainContainer = () => {
  const dispatch = useDispatch();
  const card = useSelector((store) => store.card);
  const columnHeading = ["toDo", "doing", "done"];

  const toggleButton = () => {
    dispatch(showModal()); 
    dispatch(editCard())
  }; 

  
  return (
    <div>
      {card.modal && <AddCardModal />}
    
      <div className="Title">
         

        <label >Project Team Spirit</label>
        
        <label style={{backgroundColor:'rgba(255,255,255,0.5)',borderRadius:'4px',}}>Acme,Inc.</label>
       
        
       <img className='people'src={require("../icons/people.png")} alt="people" />
       
        <label id='people' style={{backgroundColor:'rgba(255,255,255,0.5)',borderRadius:'4px',}}  >Invite</label>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => toggleButton()}
          style={{backgroundColor:'rgba(255,255,255,0.5)',borderRadius:'4px',}}
        >
          ...    Add Card
        </button>
      </div>
      <div className="List">
        {columnHeading.map((i, index) => {
          return <ListContainer key={index} column={i} index={index}/>})}
      </div>
    </div>
             
  );
};

export default MainContainer;
