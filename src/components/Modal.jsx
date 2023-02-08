export const Modal = ({open, setOpen, data}) => {
	// if(data){ 
        return (
		<dialog open={open}>
			<article>
				<header>
                    Uh-oh 👀
					<button aria-label="Close" className="close outline secondary" onClick={()=>setOpen(false)}></button>
				</header>
				{/* {data.data && <ul>
					{Object.keys(data.data.data).map(key => {
							return (
								<li key={key}>
									<b>{key.toUpperCase()}</b>: {data.data.data[key].message}
								</li>
							);
						})}
					                    
				</ul>} */}
			</article>
		</dialog>
	)}
;
