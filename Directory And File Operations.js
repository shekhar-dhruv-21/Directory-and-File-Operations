var ch,err;
var fs = require("fs");
const { stdin, stdout, exit } = require("process");
var ch;
const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
//-----------------------------------------------------------------------------------------------------------
//Create Directory ( Hint: fs.mkdir )
var createDirectoryModule = () => {
    var directoryName;
    r1.question("\n Please Enter Directory Name : ",function(directoryName)
    {
        fs.mkdir(directoryName,(err)=>
        {
            if(err)
            {
                console.log("\n Please Enter Valid Directory Name.");
                displayModule();
            }
            else
            {
                console.log("\n Directory Created Successfully!");
                displayModule();
            }
        });
    });
}
//-----------------------------------------------------------------------------------------------------------
//Remove Directory ( Hint: fs.rmdir )

function removeDirectoryModule()
{
    var directoryName;    
        r1.question("\n Enter Directory Name to Delete : ",function (directoryName)
        {
            fs.rmdir(directoryName,(err)=>{
            if(err)
            {
                console.log("\n Please Enter Valid Directory Name.");
                displayModule();
            }
            else
            {
                console.log("\n Directory Successfully Deleted!");
                displayModule();
            }
        });
    });
};
//-----------------------------------------------------------------------------------------------------------
//Write File 
var writeFileModule = () =>
{
    var contents,fileName;
    r1.question("\n Enter File Name : ",(fileName)=>
    {
        r1.question("\n Enter File Contents : ",(contents)=>
        {
            fs.writeFile(fileName + ".txt",contents,(err)=>
            {
                if (err)
                {
                    console.log("\n Please Enter Valid File Name.");
                    displayModule();
                }
                else
                {
                    console.log("\n Data Successfully Inserted in to File.");
                    displayModule();
                }
            });
        });
    });
}
//-----------------------------------------------------------------------------------------------------------
//Read File 
var readFileModule = () =>
{
    var fileName,contents;
    r1.question("\n Please Enter File Name : ",(fileName)=>
    {
        fs.readFile(fileName + ".txt",(err,contents)=>
        {
            if(err)
            {
                console.log("\n Please Enter Valid File Name.");
                displayModule();
            }
            else
            {
                console.log(contents.toString("utf8"));
                displayModule();
            }
        });
    });
}
//-----------------------------------------------------------------------------------------------------------
//Delete File
var deleteFileModule = () =>
{
    var fileName;
    r1.question("\n Enter File Name To Delete : ",(fileName)=>
    {
        fs.unlink(fileName + ".txt",(err)=>
        {
            if(err)
            {
                console.log("\n Please Enter Valid File Name.");
                displayModule();
            }
            else
            {
                console.log("\n File Deleted Successfully!");
                displayModule();
            }
        });
    });
}
//-----------------------------------------------------------------------------------------------------------
//Append data to file
var appendDataToFileModule = () =>
{
    var contents,fileName;
    r1.question("\n Enter File Name : ",(fileName)=>
    {
        r1.question("\n Enter Data For Append : ",(contents)=>
        {
            fs.appendFile(fileName + ".txt" ,contents,(err)=>
            {
                if(err)
                {
                    console.log("\n Please Enter Valid File Name.");
                    displayModule();
                }
                else
                {
                    console.log("\n Data Appended Successfully.");
                    displayModule();
                }
            });
        });
    });
}
//-----------------------------------------------------------------------------------------------------------
//Update / Replace file with new data
var updateDataOfFileModule = () =>
{
    var fileName,contents;
    r1.question("\n Enter file Name to Replace Data : ",(fileName)=>
    {
        r1.question("\n Enter New Data : ",(contents)=>
        {
            fs.writeFile(fileName + ".txt",contents,(err)=>
            {
                if(err)
                {
                    console.log("\n Please Enter Valid File Name.");
                    displayModule();
                }
                else
                {
                    console.log("\n Data Replaced Successfully!");
                    displayModule();
                }
            });
        });
    });
}
//-----------------------------------------------------------------------------------------------------------
//Rename File
var renameFileModule = () =>
{
    var oldname,newname;
    r1.question("\n Enter Old File Name : ",(oldname)=>
    {
        r1.question("\n Enter New File Name : ", (newname)=>
        {
            fs.rename(oldname + ".txt",newname+ ".txt",(err)=>
            {
                if(err)
                {
                    console.log("\n Please Enter Valid File Name.");
                    displayModule();
                }
                else
                {
                    console.log("\n Renamed Successfully!");
                    displayModule();
                }
            });
        });
    });

}
//-----------------------------------------------------------------------------------------------------------


displayModule();

function displayModule() {
    console.log("\n 1.Create Directory\n 2.Remove Directory\n 3.Write File\n 4.Read File\n 5.Delete File\n 6.Append data to file\n 7.Update / Replace file with new data\n 8.Rename File\n 9.Exit");
    r1.question("\n Please enter your choice : ",function(ch)
    {
        choices(ch);
    });
}

function choices(ch) {
    if (ch == "1") {
        createDirectoryModule();
    }
    else if (ch == "2") {
        removeDirectoryModule();
    }
    else if (ch == "3") {
        writeFileModule();
    }
    else if (ch == "4") {
        readFileModule();
    }
    else if (ch == "5") {
        deleteFileModule();
    }
    else if (ch == "6") {
        appendDataToFileModule();
    }
    else if (ch == "7") {
        updateDataOfFileModule();
    }
    else if (ch == "8") {
        renameFileModule();
    }
    else if (ch == "9") {
        exit();
    }

    else {
        console.log("\nPlease enter between 1 to 9");
    }
}


