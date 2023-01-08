import { db, storage } from "../firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import {
    deleteObject,
    getDownloadURL,
    listAll,
    ref,
    uploadBytes,
} from "firebase/storage";

// prettier-ignore
export const GetDocuments = async () => {
    const colRef = collection(db, 'admin')
    var alldata = {}
    await getDocs(colRef).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            alldata[doc.id] = doc.data()
        })
    })
    .catch(err => console.log(err.message))
    return alldata
}

// ---------------------- Checking Image Size --------------------------
// prettier-ignore
function bytesToSize(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return [parseFloat((bytes / Math.pow(k, i)).toFixed(dm)), sizes[i]];
}

// prettier-ignore
export const CheckImage = (e, video=false) => {
    if(e.target.files[0]['type'].split('/')[0] === 'image') {
        if(document.getElementById("videoerror"+e.target.id).style.display === "inherit") {
            document.getElementById("videoerror"+e.target.id).style.display = "none"
        }
        if(document.getElementById("imgandviderror"+e.target.id).style.display === "inherit") {
            document.getElementById("imgandviderror"+e.target.id).style.display = "none"
        }
        if(document.getElementById("imgerror"+e.target.id).style.display === "inherit") {
            document.getElementById("imgerror"+e.target.id).style.display = "none"
        }
        if(e.target.files[0]) {
            for(var t=0; t<e.target.files.length; t++) {
                var size = bytesToSize(e.target.files[t].size)
                if(size[1] === "KB") {
                    if(size[0] <= 500.00) {
                        // console.log('File Uploaded', size[0])
                        // updateImg(e.target.files[t])
                        document.getElementById("imageerror"+e.target.id).style.display = "none"
                        return e.target.files[t]
                    } else {
                        // console.log('File Not Uploaded')
                        document.getElementById("imageerror"+e.target.id).style.display = "inherit"
                    }
                } else {
                    // console.log('File is not in KB')
                    document.getElementById("imageerror"+e.target.id).style.display = "inherit"
                }
            }
        }
    } else if (e.target.files[0]['type'].split('/')[0] === 'video' && video) {
        if(document.getElementById("imageerror"+e.target.id).style.display === "inherit") {
            document.getElementById("imageerror"+e.target.id).style.display = "none"
        }
        if(e.target.files[0]) {
            for(var g=0; g<e.target.files.length; g++) {
                var videosize = bytesToSize(e.target.files[g].size)
                if(videosize[1] === "MB") {
                    if(videosize[0] <= 3.00) {
                        // console.log('File Uploaded', videosize[0])
                        // updateImg(e.target.files[g])
                        document.getElementById("videoerror"+e.target.id).style.display = "none"
                        return e.target.files[g]
                    } else {
                        // console.log('File Not Uploaded')
                        document.getElementById("videoerror"+e.target.id).style.display = "inherit"
                    }
                } else {
                    // console.log('File is not in KB')
                    document.getElementById("videoerror"+e.target.id).style.display = "inherit"
                }
            }
        }
    } else {
        if(video) {
            document.getElementById("imgandviderror"+e.target.id).style.display = "inherit"
        } else {
            document.getElementById("imgerror"+e.target.id).style.display = "inherit"
        }
    }
    return null
};

// ------------------------- Read Image -------------------------
// prettier-ignore
export const readURL = (input, id) => {
    if (input) {
        var reader = new FileReader();
    
        reader.onload = function (e) {
            if(document.getElementById(id)) document.getElementById(id).src = e.target.result;
        };
    
        reader.readAsDataURL(input);
    }
}

// ------------------------- Upload Image -------------------------
// prettier-ignore
export const UploadImg = async (val, path) => {
    // console.log(val)
    // Products[colap].Image[imgid].push(val.name)
    // var path = `Home/Hero/${val.name}`

    const storageRef = ref(storage, path);

    // // 'file' comes from the Blob or File API
    var url2 = await uploadBytes(storageRef, val).then(async (snapshot) => {
        // console.log('Uploaded a blob or file!');
        var data = ''
        await getDownloadURL(storageRef)
            .then((url) => {
                data = url
            })
        return data
    });
    return url2
}

// -------------------------- Update All Data -------------------------
// prettier-ignore
export const UpdateData = async (val, id) => {
    const storeRef = doc(db, "admin", id)
    // console.log(val[id].hero.title)

    await updateDoc(storeRef, val[id])
}

// -------------------------- Delete Image -------------------------
// prettier-ignore
export const DeleteImage = async (imagePath) => {
    //1.
    let storageRef = ref(storage, imagePath);
    //2.
    listAll(storageRef).then(function (res) {
        //3.
        // var images = []
        res.items.forEach(async(imageRef) => {
            await deleteObject(imageRef)
        });
        // console.log(res.items[0].getDownloadURL())
        // console.log(images)
    })
    .catch(function (error) {
        console.log(error);
    });
}

export const DeleteSingleImage = async (imagePath) => {
    // Create a reference to the file to delete
    const desertRef = ref(storage, imagePath);

    // Delete the file
    deleteObject(desertRef)
        .then(() => {
            // console.log("Success");
        })
        .catch((error) => {
            console.log(error);
        });
};
