import WebApp from '@twa-dev/sdk';

export default function About() {
    console.log('WebApp --', WebApp);
    console.log('WebApp.initData --', WebApp.initData);
    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log('pk submit form data', data);
    }

    return (
        <div>
            <h1>About</h1>
            {/* Create form with these input: name, age, avatar (image file), dob */}
            <form onSubmit={handleSubmitForm} >
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <br />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" />
                <br />
                <label htmlFor="avatar">Avatar</label>
                <input type="file" id="avatar" name="avatar" />
                <br />
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" />
                <br />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}