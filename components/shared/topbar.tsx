"use client"

import React from "react"
import { User, LogOut, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import  SearchBar  from "./SearchBar"

interface UserInfo {
  name: string
  email: string
  role: string
  avatar?: string
}

interface TopbarProps {
  user?: UserInfo
}

const defaultUser: UserInfo = {
  name: "John Smith",
  email: "john@company.com",
  role: "System Administrator",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face&auto=format"
}

 

function Topbar({ user = defaultUser }: TopbarProps) {
  const handleProfileAction = (action: string) => {
    console.log(`Clicked on: ${action}`)
  }

  return (
    <header className="h-16 border-b bg-background px-6 sticky top-0 z-50">
      <div className="flex h-full items-center justify-between">
        {/* Search bar and user menu on the left */}
        <div className="flex items-center gap-4">

          
          {/* User menu second */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="flex items-center gap-2 px-3 py-2 h-auto"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-medium">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left hidden sm:block">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.role}</p>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent 
              className="w-56" 
              align="start" 
              sideOffset={8}
            >
              <DropdownMenuLabel className="text-left">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem 
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => handleProfileAction('profile')}
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem 
                className="flex items-center gap-3 cursor-pointer text-destructive focus:text-destructive"
                onClick={() => handleProfileAction('logout')}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>          {/* Search bar first */}
          <SearchBar />
        </div>
        
        {/* Empty spacer for the right side */}
        <div />
      </div>
    </header>
  )
}

export default Topbar