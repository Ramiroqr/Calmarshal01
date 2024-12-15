import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";
import { OnboardingAction } from "../actions";
import {useForm} from '@conform-to/react'
import { parseWithZod } from "@conform-to/zod"
import { onboardingSchema } from "../lib/zodSchemas";

export default function OnboardingRoute() {
    const [ lastResult, action ] = useFormState(OnboardingAction, undefined)

    const [form, fields] = useForm({
        lastResult,

        onValidate({ formData }) {
            return parseWithZod(formData, {
                schema: onboardingSchema
            })
        },

        shouldValidate: "onBlur",
        shouldRevalidate: "onInput"
    })

    return (
        <div className="min-h-screen w-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Welcome to Cal<span className="text-primary">Marchal</span></CardTitle>
                    <CardDescription>
                        We need the following information to set up  your profile!
                    </CardDescription>
                </CardHeader>
                <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
                    <CardContent className="flex flex-col gap-y-5">
                        <div className="grid gap-y-2">
                            <Label>Full Name</Label>
                            <Input 
                                name={fields.fullName.name}
                                defaultValue={fields.fullName.initialValue}
                                key={fields.fullName.key}
                                placeholder="Jan Marshal"
                            />
                        </div>
                        <div className="grid gap-y-2">
                            <Label>Username</Label>
                            <div className="flex rounded-md">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-muted bg-muted text-sm text-muted-foreground">CalMarshal.com</span>
                                <Input 
                                    placeholder="example-user-1" 
                                    className="rounded-l-none"
                                    name={fields.userName.name}
                                    key={fields.userName.key}
                                    defaultValue={fields.userName.initialValue}
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Submit</Button>
                    </CardFooter>
                </form>
            </Card>
            
        </div>
    )
}