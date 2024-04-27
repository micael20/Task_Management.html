```  
// Initialize Firebase with your config  
firebase.initializeApp(\{  
    apiKey: "YOUR_API_KEY",  
    authDomain: "YOUR_AUTH_DOMAIN",  
    projectId: "YOUR_PROJECT_ID",  
\});  
const $d b=$ firebase.firestore () ;  
// Function to add a task  
function addTask( ) \{  
    const taskInput = document.getElementById("task-input");  
    const task = taskInput.value. $\operatorname{trim}()$;  
    if (task !== "") \{  
        db.collection("tasks"). add( \{  
            task: task,  
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),  
        \});  
        taskInput.value $=$ " ";  
    \}  
\}  
// Function to render tasks  
function renderTasks(doc) \{  
    const taskList $=$ document.getElementById("task-list");  
    const taskItem $=$ document. createElement ("li");  
    taskItem.className = "task-item";  
    taskItem.innerHTML $=$  
        <span>\$\{doc.data().task\}</span>  
        <button onclick="deleteTask('\$\{doc.id\}') ">Delete</button>  
    ;  
    taskList.appendChild(taskItem);  
\}  
// Real-time Listener for tasks  
db.collection("tasks")  
    .orderBy("timestamp", "desc")  
    . onSnapshot (snapshot $\Rightarrow$ \{  
        const changes $=$ snapshot. docChanges () ;  
        changes. forEach (change $\Rightarrow$ \{  
            if (change.type === "added") \{  
                renderTasks(change.doc);  
            \}  
        \});  
    \});  
// Function to delete a task  
function deleteTask(id) \{  
    db.collection("tasks").doc(id).delete( );  
\}  
$\cdots$  
```  
//Make sure to replace ' "YOUR_API_KEY"',  
//" "YOUR_AUTH_DOMAIN" , and ' "YOUR_PROJECT_ID"  
//with the actual values from your Firebase project.