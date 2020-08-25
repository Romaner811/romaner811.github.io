"use strict";

class GamePage {
    get slug() {
        return this._slug;
    }
    get user() {
        return this._user;
    }
    get title() {
        return this._title;
    }
    get img() {
        return this._img;
    }
    get src_link() {
        return this._src_link;
    }
    get play_link() {
        return this._play_link;
    }
    get team() {
        return this._team;
    }
    get tags() {
        return this._tags;
    }
    get description() {
        return this._description;
    }
    get work() {
        return this._work;
    }
    get extra() {
        return this._extra;
    }
    
    get is_ready() {
        return this._is_ready;
    }
    
    constructor(entry) {
        this._user = entry.user;
        this._slug = entry.slug;
        this._src_link = entry.src;
        this._play_link = GamePage.generatePlayLink(this.user, this.slug);
        this._team = entry.team;
        this._tags = entry.tags;
        this._description = entry.description;
        this._work = entry.work;
        this._extra = entry.extra;
        
        this._is_ready = false;
        this._on_ready_callbacks = [];
        
        // info to be completed from itch.io:
        this._title = null;
        this._img = null;
    }
    
    static lookUpTeamMember(username) {
        let person_info = null;
        
        if (collabs.hasOwnProperty(username)) {
            person_info = collabs[username];
            console.log(`looked up team member: ${username} ->`, person_info);
        }
        else
        {
            console.error(`${this}: No info about person '${username}', not present in collabs, may be a typo?`);
        }
        
        return person_info;
    }
    
    static generateTeamMemberHTML(username, info) {
        return `${info.id}`;
    }
    
    static generateTagHTML(tag) {
        return "#" + tag;
    }
    
    static generatePlayLink(user, slug) {
        return `https://${user}.itch.io/${slug}`;
    }
    
    onReady(func) {
        this._on_ready_callbacks.push(func);
    }
    
    prepare(itch_data) {
        let page = this;
        
        if (this.is_ready)
        {
            console.error(`${this}: was attempt to be prepared twice!`, itch_data);
            return;
        }
        
        new Promise(function(ok) {
            page._title = itch_data.title;
            page._img = itch_data.cover_image;
            ok(page);  // using this in order to delay execution until all values are set.
        }).then(function() {
            page._is_ready = true;
        }).then(function() {
            page._on_ready_callbacks.forEach(f => f(page));
        });
    }
    
    generateTeamHTML() {
        let html_parts = [];
        
        for (let i = 0; i < this.team.length; i++)
        {
            let username = this.team[i];
            let info = GamePage.lookUpTeamMember(username);
            let person_html = GamePage.generateTeamMemberHTML(username, info);
            html_parts.push(person_html);
        }
        
        return html_parts.join(", ");
    }
    
    generate(jq_template) {
        var jq_elem = jq_template.clone();
        
        this.fillTemplate(jq_elem);
        
        return jq_elem;
    }
    
    fillTemplate(jq_elem) {
        
        jq_elem.attr("name", this.slug);
        
        if (this.is_ready)
        {
            jq_elem.find(".title").html(this.title);
            jq_elem.find(".cover_image").css("backgroundImage", `url(${this.img})`);
        }
        else
        {
            console.error(`${this} is generating view for an incomplete page!`);
            jq_elem.find(".title").html(this.slug);
        }
        
        if (this.src_link != null)
        {
            jq_elem.find(".src_link").attr("href", this.src_link);
        }
        else
        {
            jq_elem.find(".src_link").hide();
        }
        jq_elem.find(".play_link").attr("href", this.play_link);
        
        jq_elem.find(".team").html(this.generateTeamHTML());
        jq_elem.find(".tags").html(this.tags.map(GamePage.generateTagHTML).join(", "));
        
        jq_elem.find(".description").html(this.description);
        jq_elem.find(".work").html(this.work);
        
        if (this.extra != null)
        {
            jq_elem.find(".work").append(this.extra);
        }
    }
    
    toString() {
        return `[${this.constructor.name}: ${this.slug} by ${this.user}]`;
    }
}

/*
$(document).ready(function() {
    $(".game .widget").each(function(i, widget_element) {
        let jq_widget_element = $(widget_element);
        let widget = new GamePage(
            jq_widget_element.attr("data-user"),
            jq_widget_element.attr("data-slug"),
            jq_widget_element.attr("data-srclink")
            );
        
        widget.Apply(jq_widget_element);
    });
});
*/