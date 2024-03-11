

export default function Comment() {
  return(<>
  
  <section className="comments">
    <h1 className="heading">user comments</h1>
    <div className="box-container">
      <div className="box">
        <div className="user">
          <img src="images/pic-1.jpg" alt="" />
          <div>
            <h3>Joel</h3>
            <span>22-04-2024</span>
          </div>
        </div>
        <div className="comment-box">this is a comment from joel</div>
        <form action="" className="flex-btn">
          <input
            type="submit"
            defaultValue="edit comment"
            name="edit_comment"
            className="inline-option-btn"
          />
          <input
            type="submit"
            defaultValue="delete comment"
            name="delete_comment"
            className="inline-delete-btn"
          />
        </form>
      </div>
        </div>
  </section>
</>
  )
}

