export const TodoAdd = ({handleFormSubmit, handleTitleChange, handleDescChange, handleImageChange}) =>{

    return (
            <section>
                <h1 className="title">Создание нового дела</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="field">
                        <label className="label">Заголовок</label>
                        <div className="control">
                            <input className="input" onChange={handleTitleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Примечание</label>
                        <div className="control">
                            <textarea className="textarea" onChange={handleDescChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="file">
                            <label className="file-label">
                                <input
                                    className="file-input"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                <span className="file-cta">
                                    <span className="file-label">
                                        Графическая иллюстрация...
                                    </span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="field is-grouped is-grouped-right">
                        <div className="control">
                            <input 
                            type="reset"
                            className="button is-link is-light" 
                            value="Сброс"
                            />
                        </div>
                        <div className="control">
                            <input 
                            type="submit"
                            className="button is-primary" 
                            value="Создать дело"
                            />
                        </div>
                    </div>
                </form>
            </section>
    );
}