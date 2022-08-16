<style scoped >

.result-area {
    background-color: #fff;
    /* background-color: #f4f4f4; */
    min-width: 100%;
    max-height: 100%;
    padding: 5px auto;
}

    .option-selector {
        display: flex;
        justify-content: flex-start;
        gap: 2rem;
        margin: 0.3rem auto;
        background-color: white;
    }    
    .result-option {
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        opacity: 0.7;
        transition: all 0.3s ease;
        border-bottom: 2px solid transparent;
    }
    .selected-option {
        border-bottom: 2px solid  #1B3D81;
    }
    .result-option:hover {
        opacity: 1;
        /* border-bottom: 2px solid  #1B3D81; */
    }

.result {
    min-height: auto;
    padding: 1rem;
    max-height: 45vh; 

    overflow: auto ;
    padding-bottom: 5rem;

}

/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px ;
  cursor: pointer;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>