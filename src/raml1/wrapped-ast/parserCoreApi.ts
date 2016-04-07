import hl=require("../highLevelAST");
import resolversApi = require("../jsyaml/resolversApi")

export type BasicNode=hl.BasicNode;
export type ValueMetadata=hl.ValueMetadata
export type AbstractWrapperNode=hl.AbstractWrapperNode;

export interface AttributeNode extends AbstractWrapperNode{

    /**
     * @return Underlying High Level attribute node
     **/
    highLevel(  ):hl.IAttribute

    /**
     * @return Whether the element is an optional sibling of trait or resource type
     **/
    optional():boolean

    meta():ValueMetadata

}

export interface Options{

    /**
     * Module used for operations with file system
     **/
    fsResolver?:resolversApi.FSResolver

    /**
     * Module used for operations with web
     **/
    httpResolver?:resolversApi.HTTPResolver

    /**
     * Whether to return Api which contains errors.
     **/
    rejectOnErrors?:boolean

    /**
     * If true, attribute defaults will be returned if no actual vale is specified in RAML code.
     * Affects only attributes.
     */
    attributeDefaults?:boolean
}