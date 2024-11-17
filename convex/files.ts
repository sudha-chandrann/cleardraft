import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


export const createFile=mutation({
    args:{
        fileName: v.string(),
        teamId:v.string(),
        createdBy:v.string(),
        archive:v.boolean(),
        document:v.string(),
        whiteboard:v.string()

    },
    handler:async(ctx,args)=>{
        const file = await ctx.db.insert("files",args);
        return file;
    }
})


export const getFiles=query({
    args:{
        teamId:v.string(),
    },
    handler:async(ctx,args)=>{
        const files=ctx.db.query('files')
        .filter(q=>q.eq(q.field('teamId'),args.teamId))
        .order('desc')
        .collect();
        return files;
    }
})


export const updateDocument=mutation(
    {
        args:{
            fileId:v.id('files'),
            document:v.string(),
        },
        handler:async(ctx ,args)=>{
            const result=await ctx.db.patch(args.fileId,{document:args.document})
            return result;
        }
    }
)