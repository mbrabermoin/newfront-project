import React from 'react';
import { Button, Divider, Field, Input, CheckboxRow, RadioButton, RadioButtonGroup } from '@/ui';
import { Card } from '@/ui';
import questions from './questions.js';
export default class companyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [{ "number": 1, "title": "Who is the primary contact for this policy?", "subtitle": "This person will receive all communications from Newfront about this policy. You can change this contact information later. If you're not sure, just add your contact information", "section": "PrimaryContact" },
            { "number": 2, "title": "Tell us about your company", "subtitle": "", "section": "Company" },
            { "number": 3, "title": "Tell us about your employees", "subtitle": "", "section": "Employees" },
            { "number": 4, "title": "How do you want to pay for your policy?", "subtitle": "", "section": "Policy" }],
            actualPage: 0,
            questions: [],
            checked: "",
            form: "workers Compensation",
            inputs: [],
        }
    }
    componentDidMount() {
        this.setState({ questions: questions.questions.filter((q) => q.section == this.state.pages[this.state.actualPage].section).filter((q) => q.form == this.state.form).sort((a, b) => a.ordering - b.ordering) })
    }
    nextScreen = () => {
        this.setState({ actualPage: this.state.actualPage + 1 });
        this.setState({ questions: questions.questions.filter((q) => q.section == this.state.pages[this.state.actualPage + 1].section).filter((q) => q.form == this.state.form).sort((a, b) => a.ordering - b.ordering) })
    }
    validateRequires = () => {
        var missingField = 0;
        for (var i = 0; i < this.state.questions.length; i++) {
            if (this.state.questions[i].isRequired) {
                if (this.state.inputs.filter((inp) => inp[1] == this.state.questions[i].id && inp[0] != "").length == 0) {
                    missingField++;
                }
            }
        }
        if (missingField > 0) {
            alert("Some fields are required.")
        } else {
            this.nextScreen()
        }
    }
    previousScreen = () => {
        this.setState({ actualPage: this.state.actualPage - 1 });
        this.setState({ questions: questions.questions.filter((q) => q.section == this.state.pages[this.state.actualPage - 1].section).filter((q) => q.form == this.state.form).sort((a, b) => a.ordering - b.ordering) })

    }
    save = () => {
        alert("Sending Form...")
        console.log(this.state.inputs)
    }
    changeInput(text, id) {
        var inputTemp = this.state.inputs;
        var existing = 0;
        for (var i = 0; i < inputTemp.length; i++) {
            if (inputTemp[i][1] == id) {
                inputTemp[i][0] = text;
                existing = 1;
            }
        }
        if (existing == 0) {
            inputTemp.push([text, id, ""])
        }
        this.setState({ inputs: inputTemp })
    }
    selectCheckbox(id, checked) {
        var inputTemp = this.state.inputs;
        var existing = 0;
        for (var i = 0; i < inputTemp.length; i++) {
            if (inputTemp[i][1] == id) {
                inputTemp[i][2] = checked;
                existing = 1;
            }
        }
        if (existing == 0) {
            inputTemp.push(["", id, checked])
        }
        this.setState({ inputs: inputTemp })
    }
    deselectCheckbox(id) {
        var inputTemp = this.state.inputs;
        for (var i = 0; i < inputTemp.length; i++) {
            if (inputTemp[i][1] == id) {
                inputTemp[i][2] = "";
            }
        }
        this.setState({ inputs: inputTemp })
    }
    render() {
        var leftButton = "";
        var rightButton = "";
        if (this.state.actualPage > 0) {
            leftButton = <div style={{ margin: "20px", float: "left" }}>
                <Button size="secondary" onClick={this.previousScreen}>Back</Button>
            </div>
        }
        if (this.state.actualPage >= 0) {
            rightButton = <div style={{ margin: "20px", float: "right" }}>
                <Button onClick={this.validateRequires}>Next</Button>
            </div>
            if (this.state.actualPage == 3) {
                rightButton = <div style={{ margin: "20px", float: "right" }}>
                    <Button onClick={this.save}>Finish</Button>
                </div>
            }
        }
        return (
            <div>
                <Card>
                    <div style={{ margin: "20px" }}>
                        <Field label={this.state.pages[this.state.actualPage].title} hint={this.state.pages[this.state.actualPage].subtitle}></Field>
                        {this.state.questions.map(question => {
                            return (question.type != "options") ?
                                <div style={{ marginTop: "20px" }}>
                                    <Field fieldId={question.id} label={question.label} >
                                        <Input fieldId={question.id} value={this.state.inputs.filter((inp) => inp[1] == question.id).map(input=>input[0]).toString()} type={question.type} onChange={(value) => this.changeInput(value, question.id)} />
                                    </Field>
                                    {question.additionalOptions.map((options) => {
                                        return (this.state.inputs.filter((i) => i[1] == question.id).length > 0 && this.state.inputs.filter((i) => i[1] == question.id && i[2] == options.id).length == 1) ?
                                            <div style={{ marginTop: "20px" }}><CheckboxRow
                                                id={options.id}
                                                isActive
                                                label={options.label}
                                                onClick={() => this.deselectCheckbox(options.id)}
                                            /></div> :
                                            <div style={{ marginTop: "20px" }}><CheckboxRow
                                                id={options.id}
                                                label={options.label}
                                                onClick={() => this.selectCheckbox(question.id, options.id)}
                                            /></div>
                                    })}
                                </div> :
                                <div>{question.options.map((option) => {
                                    return <div style={{ marginTop: "20px" }}><Card><RadioButton label={option.title}></RadioButton></Card></div>
                                })}</div>
                        }
                        )}
                    </div>
                    <Divider />
                    {leftButton}{rightButton}
                </Card>
            </div>
        )
    }
}