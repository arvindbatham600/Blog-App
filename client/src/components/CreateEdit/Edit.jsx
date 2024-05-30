import "./createEdit.scss";

const Edit = () => {
    return (
        <>
            <div id="main-container-box">
                <div className="body-container">
                    <div className="heading">Update Blog</div>
                    <form>
                        <div className="form-box">
                            <label>Title</label>
                            <input type="text" name="title" id="title" />
                        </div>
                        <div className="form-box">
                            <label>Description</label>
                            <textarea name="description" rows={7}     id="description"></textarea>
                        </div>
                        <div className="update-btn">
                            <button>Update</button>
                        </div>
                    </form>
                </div>
        </div>
        </>
    )
}

export default Edit;