function Friends({}){
    useEffect(() => {
        fetch(`/friends`)
        .then((res) => {
          if(res.ok){
            res.json()
            .then((friends) => {
                console.log(friends)
            })
          } else {
            res.json()
            .then(msg => alert(msg.error))
        }
        })
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default Friends